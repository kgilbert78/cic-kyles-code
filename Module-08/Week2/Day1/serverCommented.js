// #1 (npm init -y to create package.json, npm i -s express body-parser pg cors, to install & save those packages, npm i -s sequelize to install & save)

// #2 import express framework & assign to variable
const express = require("express");
// #3 call express function using variable and assign it to run when called by variable server
const server = express();
// Based on how we imported Message I think I could replace these 2 lines with: 
// const server = require("express")();


// #4 import cors middleware for handling cross origin requests (different ports)
const cors = require("cors");
// #5 tell express function to use cors, with server variable (.use = middleware)
server.use(cors());
// #6 import body parser for translating json to js object for server and back to string when sending response to the frontend
const bodyParser = require("body-parser");
// #7 tell express function to use bodyparser middleware with json function (.use = middleware)
server.use(bodyParser.json());

// #26 import of db (named export) from our models folder, coming through db.js, from Message.js, from sequelize import there. Then go back to db.js
const { db } = require("./models/db");
// import Message.js file (default export), assign it to variable for use below, and pass it the db the we imported above. this way it's authenticated before we pass it to the Message. data from all 3 files & database is now connected.
const Message = (require("./models/Message"))(db);
// in Message.js require("./models/Message") is not the object, it's the whole function (after = ) and the function takes the parameter db, so this assigns db as the parameter for the whole function (require("./models/Message")). added extra () to help clarify.
// More verbose way:
// const MessageSetup = require("./models/Message");
// const Message = MessageSetup(db);

// #8 create root endpoint (need to do this before server.listen because you can't access the server on the port without an endpoint)
server.get("/", (req, res) => {
    res.send({hello: "world!"});
});

// #32: C in CRUD (create)
server.post(`/messages`, async (req, res) => {
    await Message.create({ // INSERT INTO Message
        timestamp: new Date(), // NOW()
        received: req.body.received,
        content: req.body.content
    });
    const messages = await Message.findAll(); // SELECT * FROM Message
    res.send({messages});
}); // then test in postman & check for data in beekeeper

// #33 R in CRUD (read)
server.get(`/messages`, async (req, res) => {
    res.send({messages: await Message.findAll()}); // SELECT * FROM Message
}); // then test in postman & check for data in beekeeper

// #34 U in CRUD (update). : sets parameter to id and passed in whatever is in that part of the url
server.put(`/messages/:id`, async (req, res) => {
    // findOne is like SELECT LIMIT 1, WHERE id = the id passed from the route paramater. assign everything from the record at the parameter's id to new variable
    let messageToEdit = await Message.findOne({where: {id: req.params.id}}); 
    // assign new content from req to variable content
    messageToEdit.content = req.body.content;
    // update timestamp in variable
    messageToEdit.timestamp = new Date();
    // save the variable with the updated data to the message in the database at that id (overwrite). This is where the sql query runs. 
    await messageToEdit.save();
    // send all the messages back for display
    res.send({messages: await Message.findAll()});
}); // then test in postman & check for data in beekeeper

// #35 D in CRUD (delete). : sets parameter to id and passed in whatever is in that part of the url
server.delete(`/messages/:id`, async (req, res) => {
    // delete message at id of parameter from url. better to do findOne first? so the user can be prompted `are you sure you want to delete your message ${req.body.content}`? or would that be handled on the frontend?
    await Message.destroy({where: {id: req.params.id}});
    // send back all messages
    res.send({messages: await Message.findAll()});
}); // then test in postman & check for data in beekeeper

// #9 tell server to listen for calls coming in on specific port
server.listen(3002, () => {
    // #10 callback function to tell us if the server is running because if code is broken the error won't tell us this 
    console.log("the server is running on 3002")
});

// #11 run npx nodemon server.js to start server, nodemon not node for server to auto reboot with changes

// #12 open postgres app & start server there

// #13 open beekeeper & select postgres connection type, default database = mac username & connect. CREATE DATABASE messages2; & run. Refresh database dropdown & select messages2. SELECT NOW(); to test.

// #14 create models folder to give sequelize a model of the tables in the database so it can base the Javascript on it and make everything line up.

// #15 create Message.js in the models folder and switch to that file.


// // close out connection to database. "process" is built into node.
// process.on("SIGTERM", () => {
//     console.log("server terminated");
//     db.close;
// });