const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db3, User, ReadingListBook, Book} = require("./models/db3");

const prepareResponse = async (req) => {
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
    return {currentUser, booksToSend}
};

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.post("/userreadinglist", async (req, res) => {
    const response = await prepareResponse(req);
    res.send(response)
});

// server.post("/readinglist", async (req, res) => {
//     await ReadingList2.create(req.body);
//     res.send({readinglist: await ReadingList2.findAll()});
// });
// original addbook endpoint ^

server.post("/addbook", async (req, res) => {
    await console.log("addToReadingListBook:", req.body.addToReadingListBook);
    await console.log("addToBook:", req.body.addToBook);
    let bookDB = await Book.findOne({
        where: {amazonLink: req.body.addToBook.amazonLink}
    });
    console.log(bookDB)
    if (bookDB===null){
        bookDB = await Book.create(req.body.addToBook)
    }
    console.log(bookDB);

    // https://sequelize.org/master/manual/creating-with-associations.html
    await ReadingListBook.create( {
        userID: req.body.addToReadingListBook.userID,
        didRead: req.body.addToReadingListBook.didRead,
        bookID: bookDB.bookID
        // include: [{
        //     // .books is lowercase because of the name given to db.define, plural because of hasMany
        //     association: ReadingListBook.books,
        //     include: [req.body.addToBook]
        // }]
    });

    res.send({bookAdded: true, error: false})
});

server.put(`/userreadinglist/:id/:user`, async (req, res) => {
    let bookForStatusUpdate = await ReadingList.findOne({
        where: {
            bookID: req.params.id, 
            readingListID: req.params.user
        }
    });
    console.log("bookForStatusUpdate", bookForStatusUpdate)

    // bookForStatusUpdate.didRead = !bookForStatusUpdate.didRead;
    // await bookForStatusUpdate.save();
    // // function for let currentUser & let booksToSend
    // res.send({currentUser, booksToSend});

});

server.delete("/userreadinglist/:id/:user", async (req, res) => {
    const bookToRemove = await ReadingListBook.findAll({
        where: {bookID: req.params.id, readingListID: req.params.user}
    });
    console.log(bookToRemove);
    // await ReadingListBook.destroy({where: {bookID: req.params.id, readingListID: req.params.user}});
    // // function for let currentUser & let booksToSend
    // res.send({currentUser, booksToSend});
});

server.listen(3008, () => {
    console.log("server3 is listening on port 3008")
});