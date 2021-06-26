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
    console.log(req.body);
    messages.push(req.body);
    console.log(messages);
    res.send({messages: messages});
});

server.put("/messages/:index", (req, res) => {
    // pull index from route paramaters in url, get the text at that index, and assign the text coming in in the body of the request to it.
    messages[req.params.index].text = req.body.text;
    // send back the messages (with the edited one) in an object we can loop through in the front end to separate the messages
    res.send({messages: messages});
});

server.delete("/messages/:index", (req, res) => {
    messages.splice([req.params.index], 1);
    res.send({messages: messages});
});

server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});