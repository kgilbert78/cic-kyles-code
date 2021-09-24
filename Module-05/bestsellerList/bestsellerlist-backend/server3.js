const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db3, User, ReadingListBook, Book} = require("./models/db3");

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.post("/userreadinglist", async (req, res) => {
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

server.post("/addbook", async (req, res) => {
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

server.put(`/userreadinglist/:id/:user`, async (req, res) => {
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

server.delete("/userreadinglist/:id/:user", async (req, res) => {
    await ReadingListBook.destroy({
        where: {bookID: req.params.id, userID: req.params.user}
    });

    res.send({bookDeleted: true, error: false})
});

server.listen(3008, () => {
    console.log("server3 is listening on port 3008")
});