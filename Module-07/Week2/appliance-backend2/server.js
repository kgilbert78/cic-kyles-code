const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const {db, Customer} = require("./models/db");

server.get("/", (req, res) => {
    res.send({hello: "World!"});
});

server.post("/customer", async (req, res) => {
    await Customer.create(req.body);
    res.send({customers: await Customer.findAll()});
});

server.get("/customer", async (req, res) => {
    res.send({customers: await Customer.findAll()});
});


// couldn't get put to change the data - seems like the same structure as our messages database which I adapted this from??? 
server.put(`/customer/:customerID`, async (req, res) => {
    let customerToEdit = await Customer.findOne({where: {customerID: req.params.customerID}});
    customerToEdit.firstName = req.params.firstName;
    customerToEdit.lastName = req.params.lastName;
    customerToEdit.phoneNumber = req.params.phoneNumber;
    customerToEdit.address1 = req.params.address1;
    customerToEdit.address2 = req.params.address2;
    customerToEdit.city = req.params.city;
    customerToEdit.state = req.params.state;
    customerToEdit.zipCode = req.params.zipCode;
    await customerToEdit.save();
    res.send({customers: await Customer.findAll()});
});
// also thought I could do something like:
// letCustomerArray = Object.values(req.params.body)
// and then use ... with .map or .forEach to update it, and then convert it back to an object with the new values. I feel like we did an example of this somewhere but I couldn't find where and couldn't figure out how to do it on my own (in a separate file with the same data in an object).

server.delete(`/customer/:customerID`, async (req, res) => {
    await Customer.destroy({where: {customerID: req.params.customerID}});
    res.send({customer: await Customer.findAll()});
});

server.listen(3003, () => {
    console.log("server is listening on port 3003")
});