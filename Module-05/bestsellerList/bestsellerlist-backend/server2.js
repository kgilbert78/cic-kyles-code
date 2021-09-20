const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db2, ReadingList2, User, ReadingListBook, Book} = require("./models/db2");

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.get("/readinglist", async (req, res) => {
    let userReadingList = await ReadingList2.findAll({
        include: [
            {model: Book}
        ]
    })
    res.send({readinglist: await userReadingList});
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
            {
                model: ReadingListBook,
                include: [
                    {model: Book}
                ]
            }
        ]
    });

    res.send({currentUser, booksToSend});
});

server.post("/readinglist", async (req, res) => {
    await ReadingList2.create(req.body);
    res.send({readinglist: await ReadingList2.findAll()});
});

server.put(`/readinglist/:id`, async (req, res) => {
    let bookToEdit = await ReadingList2.findOne({where: {bookID: req.params.id}});
    Object.assign(bookToEdit, req.body);
    await bookToEdit.save();
    res.send({readinglist: await ReadingList2.findAll()});
});

server.delete("/readinglist/:id", async (req, res) => {
    await ReadingList2.destroy({where: {bookID: req.params.id}});
    res.send({readinglist: await ReadingList2.findAll()});
});

server.listen(3007, () => {
    console.log("server2 is listening on port 3007")
});