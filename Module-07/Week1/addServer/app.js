const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/hello", (request, response) => {
    response.send("Hello World! Bonjour, monde!");
});

app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params.num1, req.params.num2);
    res.send(`${parseInt(req.params.num1) + parseInt(req.params.num2)}`);
});

app.get("/add2", (req, res) => {
    console.log(req.query);
    res.send(`${parseInt(req.query.num1) + parseInt(req.query.num2)}`);
});

app.post("/add3", (req, res) => {
    console.log(req.body);
    res.send({sum: req.body.num1 + req.body.num2});
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});