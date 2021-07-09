const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
const bodyParser = require("body-parser");
server.use(bodyParser.json());

// initial messages to display on frontend when the page loads & makes the initial get request
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

// request to display messages (made every few seconds on frontend to check for updates) send as json object
server.get("/messages", (req, res) => {
    res.send({messages});
});

// handle messages posted by user from frontend
server.post("/messages", (req, res ) => {
    console.log(req.body);
    // append new message posted by user to array of message objects, in body of request
    messages.push(req.body);
    console.log(messages);
    // send to frontend in object with key of messages 
    // {messages: messages = [ {text:, received:, timestamp:}, {}, {} ] }
    res.send({messages: messages});
});

// handle edited messages
server.put("/messages/:index", (req, res) => {
    // pull index from route paramaters in url, get the text at that index, and assign the text coming in in the body of the request to it.
    messages[req.params.index].text = req.body.text;
    // send back the messages (with the edited one) in an object with a key of messages
    res.send({messages: messages});
});

// handle deleted messages
server.delete("/messages/:index", (req, res) => {
    // pull index from route paramaters in url and remove the 1 message at that index using splice
    messages.splice([req.params.index], 1);
    // send back the messages (with the edited one) in an object with a key of messages
    res.send({messages: messages});
});

server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});