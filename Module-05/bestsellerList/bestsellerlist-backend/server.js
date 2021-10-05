const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());
const argon2 = require("argon2");
const crypto = require("crypto");

const { db, User, ReadingListBook, Book } = require("./models/db");

// ~ put this back into each function in case 2 users access it at the same time? 
// Did put it back into createaccount endpoint & changepassword,  not yet w/ isLoggedIn... is there a way to guard against 2 users without repeating isLoggedIn code in login endpoint?
// maybe put them into an array of objects and take the one with the accessCode I sent?
const logInData = { userID: "", username: "", accessCode: "" };

const isLoggedIn = async (req, res, next) => {
    console.log(req.headers);
    // captial C in accessCode is getting lowercased before it comes in
    if (!req.headers.username && (!req.headers.accesscode || !req.headers.pwd)) {
        // ~ refine to specify which were blank
        res.send({ error: "Please enter your username and password." });
    } else {
        const userInDB = await User.findOne({
            where: {
                username: req.headers.username
            }
        });
        if (userInDB === null) {
            res.send({ error: "That username is not in the database." });
        } else {
            let frontendHash = req.headers.accesscode;
            let frontendPassword = req.headers.pwd;
            const dbHash = userInDB.accessCode;
            if (frontendHash === userInDB.accessCode || await argon2.verify(dbHash, frontendPassword)) { // returns true...
                logInData.userID = userInDB.userID;
                logInData.username = userInDB.username;
                logInData.accessCode = userInDB.accessCode;
                // ~ change above to Object.assign, maybe in separate function?
                next();
            } else { // returns false...
                console.log("dbHash:", dbHash, "frontendHash:", frontendHash);
                res.send({ error: `The password you entered is incorrect.` });
            }
        };
    };

};

// ~ get this working in isLoggedIn, twice in changepassword & createaccount endpoints (2nd time called newUserDB, updatedUser)
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

server.post("/createaccount", async (req, res) => {
    console.log(req.body)
    // findUser(req.body.username);
    const userInDB = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (userInDB === null) {
        const salt = await crypto.randomBytes(32);
        const hash = await argon2.hash(req.body.password, { salt: salt });
        // const hash = await argon2.hash(req.body.password);

        const newUser = {
            username: req.body.username,
            accessCode: hash
        }

        await User.create(newUser);

        // findUser(req.body.username);
        const newUserDB = await User.findOne({
            where: {
                username: req.body.username
            }
        });
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

server.put("/changepassword", async (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    if (!req.headers.username && !req.headers.accesscode) {
        // ~ refine to specify which were blank
        res.send({ error: "Please enter your username and password." });
    } else {
        const userInDB = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        // ~ Error: WHERE parameter "username" has invalid "undefined" value
        // ...probably means I need to await something here:
        if (userInDB !== null) {
            const currentPwdHash = null;
            if (req.headers.accesscode.includes("$argon2i$v=")) {
                currentPwdHash = req.headers.pwd;
            } else {
                const salt = await crypto.randomBytes(32);
                const hash = await argon2.hash(req.headers.pwd, { salt: salt });
                currentPwdHash = hash;
            }

            if (userInDB.accessCode === currentPwdHash) {
                const salt = await crypto.randomBytes(32);
                const hash = await argon2.hash(req.body.newpwd, { salt: salt });
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
            } else {
                res.send({ error: `The current password you entered is incorrect.` });
            }
        } else {
            res.send({ error: "That username is not in the database." });
        }
    };
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

server.listen(3008, () => {
    console.log("readinglist server is listening on port 3008")
});