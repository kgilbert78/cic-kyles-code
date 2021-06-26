const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

let messages = [
    {
        text: "This is a message I sent.",
        received: false,
        timestamp: new Date()
    },
    {
        text: "This is a computer generated response.",
        received: true,
        timestamp: new Date()
    },
    {
        text: "I sent this message too.",
        received: false,
        timestamp: new Date()
    },
];

server.get("/messages", (req, res) => {
    res.send({messages});
});

server.post("/messages", (req, res ) => {
    res.send({messages: "messages go here"});
});


server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});