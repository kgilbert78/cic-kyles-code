const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db, ReadingList} = require("./models/db");

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.get("/readinglist", async (req, res) => {
    res.send({readinglist: await ReadingList.findAll()});
});

server.post("/readinglist", async (req, res) => {
    await ReadingList.create(req.body);
    res.send({readinglist: await ReadingList.findAll()});
});

server.put(`/readinglist/:id`, async (req, res) => {
    let bookToEdit = await ReadingList.findOne({where: {bookID: req.params.id}});
    Object.assign(bookToEdit, req.body);
    await bookToEdit.save();
    res.send({readinglist: await ReadingList.findAll()});
});

server.delete("/readinglist/:id", async (req, res) => {
    await ReadingList.destroy({where: {bookID: req.params.id}});
    res.send({readinglist: await ReadingList.findAll()});
});

server.listen(3006, () => {
    console.log("server is listening on port 3006")
});