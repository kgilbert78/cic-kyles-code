const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const { db, Customer } = require("./models/db");

server.get("/", (req, res) => {
    res.send({hello: "world"});
});

server.get("/customer", async (req, res) => {
    res.send({customers: await Customer.findAll()});
});

server.post("/customer", async (req, res) => {
    await Customer.create(req.body);
    res.send({ customers: await Customer.findAll()});
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});
