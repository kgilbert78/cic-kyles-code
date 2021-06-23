const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

app.get("/", (request, response) => {
    response.send("Hello World!");
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
    res.send({
        sum: parseFloat(req.body.num1) + parseFloat(req.body.num2),
        otherData: "filter this out on the front end"
    });
});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});