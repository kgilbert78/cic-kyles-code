// #1 import back end framework from npm, which allows you to write code in a less verbose way. express is a function. name the variable because we use it on the next line.
const express = require("express");
// #2 create server: call in express code using variable created above, and assign it to variable "app" for use below. routers are here, nodemon is just a file watcher. could have multiple servers (on different ports) const app2 = express();
const app = express();
// #7 import body parser for interpreting post requests 
const bodyParser = require("body-parser");
// #8 tell express app to use body-parser (under variable name) for json data. middleware - running btw request coming in and endpoint code
app.use(bodyParser.json());

// #4 create "get" endpoint to be prepared for get requests, callback function to send Hello World data back. here express is automatically passing in the request.
app.get("/hello", (request, response) => {
    // console.log(request);
    response.send("Hello World! Bonjour, monde!");
});

// #5 SEND DATA WITH ROUTE PARAMETERS
// create "get" endpoint to be prepared for get requests, callback function to send data back. 
// colon to name parameters to pass in whatever is typed in the url between the /'s like localhost:3000/add/1/2 (result: 3)
app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params.num1, req.params.num2);
    // params are sent as strings by the browser (results of console log above are { num1: '5', num2: '3' }) and must be passed back to the browser as strings too. Formatting below addresses both these issues.
    res.send(`${parseInt(req.params.num1) + parseInt(req.params.num2)}`);
    // ^ passes the request to express. response can then be accessed via the browser (or postman, etc.)
});

// #6 SEND DATA WITH QUERY PARAMETERS (example passing 5 & 3 as parameters below)
// http://localhost:3000/add2?num1=5&num2=3
// create "post" endpoint to be prepared for post requests, callback function to send data back. 
app.get("/add2", (req, res) => {
    console.log(req.query);
    res.send(`${parseInt(req.query.num1) + parseInt(req.query.num2)}`);
});

// #9 SEND DATA IN BODY
// for post request to http://localhost:3000/add3 in postman with body {"num1": 5, "num2": 4} ...keys are the parameters, in quotes because it's json.
app.post("/add3", (req, res) => {
    console.log(req.body);
    // passes the request to express and returns an object containing the sum of the numbers passed in as parameters (after installing/importing body-parser). express translates it into json as requested by postman. express can send back strings or objects but not numbers by themselves.
    res.send({sum: req.body.num1 + req.body.num2});
});

// #3 specify port that server will run on, for app to listen for calls coming in.
// callback function because if code is broken the error won't clarify if the server is running.
app.listen(3000, () => {
    console.log("server is running on port 3000");
    // if you see this message all the back end code ran fine
});