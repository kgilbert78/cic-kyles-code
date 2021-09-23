const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db2, ReadingList2, User, ReadingListBook, Book} = require("./models/db2");

// const prepareResponse = async (req) => {
//     let currentUser = await User.findOne({
//         where: {
//             userID: req.body.userID
//         }
//     });

//     let booksToSend = await ReadingList2.findAll({
//         where: {userID: req.body.userID},
//         include: [
//             { // it's sending the readingListBookID as the bookID
//                 model: ReadingListBook,
//                 include: [
//                     {model: Book}
//                 ]
//             }
//         ]
//     });
//     const response = {currentUserRes: currentUser, booksToSendRes: booksToSend}
//     return response;
// };

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.post("/userreadinglist", async (req, res) => {
    let currentUser = await User.findOne({
        where: {
            userID: req.body.userID
        }
    });

    let booksToSend = await ReadingList2.findAll({
        where: {userID: req.body.userID},
        include: [
            { // it's sending the readingListBookID as the bookID
                model: ReadingListBook,
                include: [
                    {model: Book}
                ]
            }
        ]
    });
    // console.log(currentUser.dataValues)
    console.log(booksToSend[0].dataValues.readingListBooks[2])
    // console.log(booksToSend[0].dataValues.readingListBooks[2].dataValues.books[0])

    // // ATTEMPT AT FUNCTION ABOVE - undefined on frontend
    // const response = prepareResponse(req);
    // // console.log(currentUser.dataValues)
    // // await console.log(booksToSend[0].dataValues.readingListBooks[2].dataValues.books[0])
    // const currentUser = response.currentUserRes;
    // const booksToSend = response.booksToSendRes;

    res.send({currentUser, booksToSend});
    // console.log(booksToSend)
});

// server.post("/readinglist", async (req, res) => {
//     await ReadingList2.create(req.body);
//     res.send({readinglist: await ReadingList2.findAll()});
// });
// original addbook endpoint ^

server.post("/addbook", async (req, res) => {
    await console.log("addToReadingListBook:", req.body.addToReadingListBook);
    await console.log("addToBook:", req.body.addToBook);
    // const checkForBook = await Book.findOne({
    //     where: {amazonLink: req.body.addToBook.amazonLink}
    // });
    // await checkForBook !== null ? Book.create(req.body.addToBook) : null;
    // await console.log(checkForBook);

    // only create the book (and readingListBook) IF it's not already in the Book table, ELSE create only the readingListBook

    // https://sequelize.org/master/manual/creating-with-associations.html
    ReadingListBook.create(await {
        readingListID: req.body.addToReadingListBook.userID,
        didRead: req.body.addToReadingListBook.didRead,
        include: [{
            // .books is lowercase because of the name given to db.define, plural because of hasMany
            association: ReadingListBook.books,
            include: [req.body.addToBook]
        }]
    })
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

server.listen(3007, () => {
    console.log("server2 is listening on port 3007")
});