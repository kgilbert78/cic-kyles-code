const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const argon2 = require("argon2");
const crypto = require("crypto");

const { db, User, ReadingListBook, Book } = require("./models/db");

// ~ prevent 2 users from causing a conflict here by making this into an array of objects, push objects to it, and take the one with the accessCode I sent, then delete objects from the array when done. use it in endpoint for createaccount in addition to isLoggedIn.
let logInData = { userID: "", username: "", accessCode: "" };

const isLoggedIn = async (req, res, next) => {
    if (!req.headers.username && (!req.headers.accesscode || !req.headers.pwd)) {
        // ~ refine to specify which were blank
        res.send({ error: "Please enter your username and password." });
    } else {
        let userInDB = await findUser(req.headers.username);

        if (userInDB === null) {
            res.send({ error: "That username is not in the database." });
        } else {
            let frontendHash = req.headers.accesscode;
            let frontendPassword = req.headers.pwd;
            const dbHash = userInDB.accessCode;
            if (frontendHash === userInDB.accessCode || await argon2.verify(dbHash, frontendPassword)) {
                logInData.userID = userInDB.userID;
                logInData.username = userInDB.username;
                logInData.accessCode = userInDB.accessCode;
                // ~ change above to Object.assign, maybe in separate function?
                next();
            } else {
                res.send({ error: `The password you entered is incorrect.` });
            }
        };
    };
};

const validatePassword = async (req, res, next) => {
    
    const validateLength = (passwordToCheck) => {
        if (passwordToCheck.length > 5) {
            return { isValid: true };
        } else {
            return { isValid: false, error: "passwords must contain at least 6 characters" };
        };
    };

    const validateLetters = (passwordToCheck) => {
        let lowercase = /[a-z]/g;
        let uppercase = /[A-Z]/g;
        if (passwordToCheck.match(lowercase) || passwordToCheck.match(uppercase)) {
            return { isValid: true };
        } else {
            return { isValid: false, error: "passwords must contain at least 1 letter" };
        };
    };

    const validateNumbers = (passwordToCheck) => {
        let regX = /[0-9]/g;
        if (passwordToCheck.match(regX)) {
            return { isValid: true };
        } else {
            return { isValid: false, error: "passwords must contain at least 1 number" };
        };
    };

    const validateNoSpaces = (passwordToCheck) => {
        if (passwordToCheck.includes(" ")) {
            return { isValid: false, error: "passwords must not contain spaces" };
        } else {
            return { isValid: true };
        };
    };

    let arrayOfErrors = [];
    let pwdToCheck = "";
    if (req.body.newPwd) {
        pwdToCheck = req.body.newPwd; // from changepassword endpoint
    } else {
        pwdToCheck = req.body.password; // from createaccount endpoint
    };

    const longEnough = validateLength(pwdToCheck);
    const hasLetters = validateLetters(pwdToCheck);
    const hasNumbers = validateNumbers(pwdToCheck);
    const noSpaces = validateNoSpaces(pwdToCheck);

    if (!longEnough.isValid) {
        arrayOfErrors.push(longEnough.error)
    };
    if (!hasLetters.isValid) {
        arrayOfErrors.push(hasLetters.error)
    };
    if (!hasNumbers.isValid) {
        arrayOfErrors.push(hasNumbers.error)
    };
    if (!noSpaces.isValid) {
        arrayOfErrors.push(noSpaces.error)
    };

    if (arrayOfErrors.length === 0) {
        next();
    } else {
        res.send({ error: `Your password does not meet these requirements: ${arrayOfErrors}` });
    };
};

// ~ prevent 2 users from causing a conflict here by making this return an array of objects, push objects to it, and take the one with the accessCode I sent, then delete objects from the array when done.
const findUser = async (usernameToMatch) => {
    const userInDB = await User.findOne({
        where: {
            username: usernameToMatch
        }
    });
    return userInDB;
}

server.get("/", (req, res) => {
    res.send({ hello: "World!" });
});

server.post("/login", isLoggedIn, async (req, res) => {
    res.send({ success: true, data: logInData })
});

server.post("/createaccount", validatePassword, async (req, res) => {
    const userInDB = await findUser(req.body.username);

    if (userInDB === null) {
        const salt = await crypto.randomBytes(32);
        const hash = await argon2.hash(req.body.password, { salt: salt });

        const newUser = {
            username: req.body.username,
            accessCode: hash
        }

        await User.create(newUser);

        const newUserDB = await findUser(req.body.username);

        res.send({
            success: true,
            data: {
                userID: newUserDB.userID,
                username: newUserDB.username,
                accessCode: newUserDB.accessCode
            }
        });
    } else {
        res.send({ error: `Username ${req.body.username} is not available. Please choose another one.` });
    };

});

server.put("/changepassword", isLoggedIn, validatePassword, async (req, res) => {
    const salt = await crypto.randomBytes(32);
    const hash = await argon2.hash(req.body.newPwd, { salt: salt });
    let userInDB = await User.findOne({
        where: {
            username: req.headers.username
        }
    });
    userInDB.accessCode = hash;
    await userInDB.save();

    const updatedUserDB = await User.findOne({
        where: {
            username: req.headers.username
        }
    });
    res.send({
        success: true,
        data: {
            userID: updatedUserDB.userID,
            username: updatedUserDB.username,
            accessCode: updatedUserDB.accessCode
        }
    });
});

// server.delete(`/user/:userID`, async (req, res) => {
//     await User.destroy({where: {userID: req.params.userID}});
//     res.send({user: await User.findAll()});
// });


server.post("/userreadinglist", isLoggedIn, async (req, res) => {
    let currentUser = await User.findOne({
        where: {
            userID: req.body.userID
        }
    });

    let booksToSend = await ReadingListBook.findAll({
        where: { userID: req.body.userID },
        include: [
            { model: Book }
        ]
    });

    res.send({ currentUser, booksToSend });
});

server.post("/addbook", isLoggedIn, async (req, res) => {
    let bookForDB = await Book.findOne({
        where: { amazonLink: req.body.updateBookTable.amazonLink }
    });
    // create Book before creating ReadingListBook, so it can match the bookIDs when it makes the ReadingListBook record.
    if (bookForDB === null) {
        bookForDB = await Book.create(req.body.updateBookTable);
    };

    await ReadingListBook.create({
        userID: req.body.addToReadingListBook.userID,
        didRead: req.body.addToReadingListBook.didRead,
        bookID: bookForDB.bookID
    });

    res.send({ bookAdded: true, error: false })
});

server.put(`/userreadinglist/:id/:user`, isLoggedIn, async (req, res) => {
    let bookForStatusUpdate = await ReadingListBook.findOne({
        where: {
            bookID: req.params.id,
            userID: req.params.user
        }
    });

    bookForStatusUpdate.didRead = !bookForStatusUpdate.didRead;
    await bookForStatusUpdate.save();

    res.send({ statusUpdated: true, error: false })
});

server.delete("/userreadinglist/:id/:user", isLoggedIn, async (req, res) => {
    await ReadingListBook.destroy({
        where: { bookID: req.params.id, userID: req.params.user }
    });

    res.send({ bookDeleted: true, error: false })
});

let port = process.env.PORT;
if (!port) {
    port = 3008;
};

server.listen(port, () => {
    console.log(`The readinglist server is listening on port ${port}`)
});