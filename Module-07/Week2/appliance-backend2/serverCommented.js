// #1 import express and assign it to be called by the variable server
const server = require("express")();

// #2 tell the express server to use body-parser middleware to translate json received to js object & back to a string when when sending response. do this by calling the json function on the import and passing all that to server.use (use for middleware).
server.use(require("body-parser").json());

// #3 tell the server to use cors middleware for "cross origin requests" (from other ports) by passing the imported function to the server and calling it.
server.use(require("cors")());

// #11 import database from db.js where we created the connection, & then go create Customer.js 
// #17 added Customer to import for use in endpoints
const {db, Customer} = require("./models/db");

// #4 create root endpoint (need to do this before server.listen because you can't access the server on the port without an endpoint)
server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

// #18 "Create" endpoint for Customer, asynchronous to connect to database
server.post("/customer", async (req, res) => {
    // wait for connection, then "INSERT INTO Customer" the contents of the body of the postman or fetch request
    await Customer.create(req.body);
    // wait for connection, then "SELECT * FROM Customer" & send it back to postman or the frontend
    res.send({customers: await Customer.findAll()});
});

// #19 "Read" endpoint for Customer, asynchronous to connect to database
server.get("/customer", async (req, res) => {
    // wait for connection, then "SELECT * FROM Customer" & send it back to postman or the frontend
    res.send({customers: await Customer.findAll()});
});

// #5 tell the server what port to listen for calls coming in on. Also pass it a callback function to console.log that the server is running because error messages won't tell us this.
server.listen(3003, () => {
    console.log("server is listening on port 3003")
});

// #6 - start postgres, open beekeeper and open postgres connection, CREATE DATABASE appliances2; then create db.js