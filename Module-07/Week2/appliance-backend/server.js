const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

const { db, Customer } = require("./models/db");

server.get("/", (req, res) => {
    res.send({hello: "world"});
});

server.get("/customer/:pageNum", async (req, res) => {
    const page = parseInt(req.params.pageNum);
    res.send({customers: await Customer.findAndCountAll({limit: 3, offset: 3 * page - 1})});
});

server.post("/customer", async (req, res) => {
    if (req.body.zipCode.length !== 5) {
        res.send({error: "Please enter a 5-digit zip code"})
    } else {
        await Customer.create(req.body);
        res.send({ customers: await Customer.findAll()});
    }
});

// server.put(`/customer/:customerID`, async (req, res) => {
//     let customerToEdit = await Customer.findOne({where: {customerID: req.params.customerID}});
//     customerToEdit.firstName = req.params.firstName;
//     customerToEdit.lastName = req.params.lastName;
//     customerToEdit.phoneNumber = req.params.phoneNumber;
//     customerToEdit.address1 = req.params.address1;
//     customerToEdit.address2 = req.params.address2;
//     customerToEdit.city = req.params.city;
//     customerToEdit.state = req.params.state;
//     customerToEdit.zipCode = req.params.zipCode;
//     await customerToEdit.save();
//     res.send({customers: await Customer.findAll()});
// });

server.delete(`/customer/:customerID`, async (req, res) => {
    await Customer.destroy({where: {customerID: req.params.customerID}});
    res.send({customer: await Customer.findAll()});
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});
