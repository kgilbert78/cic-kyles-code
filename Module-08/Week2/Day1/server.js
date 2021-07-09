const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

const { db } = require("./models/db");
const Message = (require("./models/Message"))(db);

server.get("/", (req, res) => {
    res.send({hello: "world!"});
});

server.post(`/messages`, async (req, res) => {
    await Message.create({
        timestamp: new Date(),
        received: req.body.received,
        content: req.body.content
    });
    const messages = await Message.findAll();
    res.send({messages});
});

server.get(`/messages`, async (req, res) => {
    res.send({messages: await Message.findAll()});
});

server.put(`/messages/:id`, async (req, res) => {
    let messageToEdit = await Message.findOne({where: {id: req.params.id}}); 
    messageToEdit.content = req.body.content;
    messageToEdit.timestamp = new Date();
    await messageToEdit.save();
    res.send({messages: await Message.findAll()});
});

server.delete(`/messages/:id`, async (req, res) => {
    await Message.destroy({where: {id: req.params.id}});
    res.send({messages: await Message.findAll()});
});

server.listen(3002, () => {
    console.log("the server is running on 3002")
});
