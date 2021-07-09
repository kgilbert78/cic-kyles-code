// import express framework & assign to variable
const express = require("express");
// call express function using variable and assign it to run when called by variable server
const server = express();
// Based on how we imported Message I think I could replace these 2 lines with: 
// const server = require("express")();


// import cors for handling cross origin requests (different ports)
const cors = require("cors");
// tell express function to use cors, with server variable
server.use(cors());
// import body parser for handling json
const bodyParser = require("body-parser");
// tell express function to use bodyparser with json function
server.use(bodyParser.json());

// import of db (named export) from our models folder, coming through db.js, from Message.js, from sequelize import there. 
const { db } = require("./models/db");
// import Message.js file (default export), assign it to variable for use below, and pass it the db the we imported above. this way it's authenticated before we pass it to the Message. data from all 3 files & database is now connected.
const Message = (require("./models/Message"))(db);
// in Message.js require("./models/Message") is not the object, it's the whole function (after = ) and the function takes the parameter db, so this assigns db as the parameter for the whole function (require("./models/Message")). added extra () to help clarify.
// More verbose way:
// const MessageSetup = require("./models/Message");
// const Message = MessageSetup(db);

// root endpiont
server.get("/", (req, res) => {
    res.send({hello: "world!"});
});

// C in CRUD (create)
server.post(`/messages`, async (req, res) => {
    await Message.create({ // INSERT INTO Message
        timestamp: new Date(), // NOW()
        received: req.body.received,
        content: req.body.content
    });
    const messages = await Message.findAll(); // SELECT * FROM Message
    res.send({messages});
});

// R in CRUD (read)
server.get(`/messages`, async (req, res) => {
    res.send({messages: await Message.findAll()}); // SELECT * FROM Message
});

// U in CRUD (update). : sets parameter to id and passed in whatever is in that part of the url
server.put(`/messages/:id`, async (req, res) => {
    // findOne is like SELECT LIMIT 1, WHERE id = the id passed from the route paramater. assign everything from the record at the parameter's id to new variable
    let messageToEdit = await Message.findOne({where: {id: req.params.id}}); 
    // assign new content from req to variable content
    messageToEdit.content = req.body.content;
    // update timestamp in variable
    messageToEdit.timestamp = new Date();
    // save the variable with the updated data to the message in the database at that id (overwrite)
    await messageToEdit.save();
    // send all the messages back for display
    res.send({messages: await Message.findAll()});
});

// D in CRUD (delete). : sets parameter to id and passed in whatever is in that part of the url
server.delete(`/messages/:id`, async (req, res) => {
    // delete message at id of parameter from url. better to do findOne first? so the user can be prompted `are you sure you want to delete your message ${req.body.content}`? or would that be handled on the frontend?
    await Message.destroy({where: {id: req.params.id}});
    // send back all messages
    res.send({messages: await Message.findAll()});
});

server.listen(3002, () => {
    console.log("the server is running on 3002")
});

// // close out connection to database. "process" is built into node.
// process.on("SIGTERM", () => {
//     console.log("server terminated");
//     db.close;
// });