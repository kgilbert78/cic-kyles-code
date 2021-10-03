const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db, User, ReadingListBook, Book} = require("./models/db");

const logInData = {userID: "", username: "", accessCode: ""};

const isLoggedIn = async (req, res, next) => {
    if (!req.headers.username && !req.headers.password) {
        // ~ refine to specify which were blank
        res.send({error: "Please enter your username and password."});
    } else {
        const userInDB = await User.findOne({
            where: {
                username: req.headers.username
            }
        });
        if (userInDB === null) {
            res.send({error: "That username is not in the database."});
        } else {
            if (userInDB.accessCode !== req.headers.password) {
                res.send({error: `The password you entered is incorrect.`});
            } else { // ~ change to Object.assign, maybe in separate function?
                logInData.userID = userInDB.userID;
                logInData.username = userInDB.username;
                logInData.accessCode = userInDB.accessCode;
                next();
            }
        };
    };
    
};

// ~ get this working in isLoggedIn, twice in changepassword & createaccount endpoints (2nd time called getNewUser, updatedUser)
const findUser = async (usernameToMatch) => {
    const userInDB = await User.findOne({
        where: {
            username: usernameToMatch
        }
    });
    return userInDB;
}

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.post("/login", isLoggedIn, async (req, res) => {
    res.send({success: true, data: logInData})
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
        await User.create(req.body);
        // findUser(req.body.username);
        const getNewestUser = await User.findOne({
            where: {
                username: req.body.username
            }
        }); 
        // ~ change to Object.assign, maybe in separate function?
        logInData.userID = getNewestUser.userID;
        logInData.username = getNewestUser.username;
        logInData.accessCode = getNewestUser.accessCode;
        res.send({success: true, data: logInData});
    } else {
        res.send({error: `Username ${req.body.username} is not available. Please choose another one.`});
    };
    
});

// server.delete(`/user/:userID`, async (req, res) => {
//     await User.destroy({where: {userID: req.params.userID}});
//     res.send({user: await User.findAll()});
// });

// ~ make this log them in on the frontend?
server.put("/changepassword", async (req, res) => {
    // findUser(req.headers.username);
    const userInDB = await User.findOne({
        where: {
            username: req.headers.username
        }
    });
    
    if (userInDB !== null) {
        if (userInDB.accessCode !== req.headers.password) {
            res.send({error: `The current password you entered is incorrect.`});
        } else {
            userInDB.accessCode = req.body.newPassword
            await userInDB.save();
            const updatedUser = await User.findOne({
                where: {
                    username: req.headers.username
                }
            }); 
            // ~ change to Object.assign, maybe in separate function?
            logInData.userID = updatedUser.userID;
            logInData.username = updatedUser.username;
            logInData.accessCode = updatedUser.accessCode;
            res.send({success: true, data: logInData});
        } 
    } else {
        res.send({error: "That username is not in the database."});
    }
    
});

server.post("/userreadinglist", isLoggedIn, async (req, res) => {
    let currentUser = await User.findOne({
        where: {
            userID: req.body.userID
        }
    });

    let booksToSend = await ReadingListBook.findAll({
        where: {userID: req.body.userID},
        include: [
            {model: Book}
        ]
    });

    res.send({currentUser, booksToSend});
});

server.post("/addbook", isLoggedIn, async (req, res) => {
    let bookForDB = await Book.findOne({
        where: {amazonLink: req.body.updateBookTable.amazonLink}
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

    res.send({bookAdded: true, error: false})
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

    res.send({statusUpdated: true, error: false})
});

server.delete("/userreadinglist/:id/:user", isLoggedIn, async (req, res) => {
    await ReadingListBook.destroy({
        where: {bookID: req.params.id, userID: req.params.user}
    });

    res.send({bookDeleted: true, error: false})
});

server.listen(3008, () => {
    console.log("readinglist server is listening on port 3008")
});