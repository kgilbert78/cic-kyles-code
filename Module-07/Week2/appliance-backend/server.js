const server = require("express")();
server.use(require("body-parser").json());
server.use(require("cors")());

// const addTimeMiddleware = (req, res, next) => {
//     res.locals.requestTime = new Date();
//     next();
// };
// server.use(addTimeMiddleware);

const { db, Customer, User } = require("./models/db");
const Op = require("sequelize").Op;

const isLoggedInMiddleware = async (req, res, next) => {
    if (!req.headers.email || !req.headers.password) {
        res.send({error: "You did not provide authentication information."});
    } else {
        const userDB = await User.findOne({where: {email: req.headers.email}});
        console.log(userDB);
        if (!userDB) {
            res.send({error: "There is no user with that email address."});
        } else {
            if (userDB.password === req.headers.password) {
                next();
            } else {
                res.send({error: "That password does not match the user."});
            };
        };
    };
    
};

server.get("/", (req, res) => {
    res.send({hello: "world"});
});

server.get("/customer/:pageNum", isLoggedInMiddleware, async (req, res) => {
    //console.log(res.locals.requestTime);
    const page = parseInt(req.params.pageNum);
    if (page <= 0) {
        res.send({
            customers: await Customer.findAndCountAll({
                limit: 3, offset: 0
            })
        });
    } else {
        res.send({
            customers: await Customer.findAndCountAll({
                limit: 3, offset: 3 * page - 1
            })
        });
    }
    
});

server.post("/customer", isLoggedInMiddleware, async (req, res) => {
    if (req.body.zipCode.length !== 5) {
        res.send({error: "Please enter a 5-digit zip code"})
    } else {
        await Customer.create(req.body);
        res.send({ customers: await Customer.findAll()});
    }
});

server.post("/customerSearch", isLoggedInMiddleware, async (req, res) => {
    res.send({
        customers: await Customer.findAll({
            where: {
                // Operator
                [Op.or]: {
                    // i for case Insensitive, like as in equal to, % to allow letters before or after it
                    firstName: { [Op.iLike]: `%${req.body.searchQuery}%`},
                    lastName: { [Op.iLike]: `%${req.body.searchQuery}%`}
                },
            },
        })
    });
});

server.post(`/login`, isLoggedInMiddleware, async (req, res) => {
    res.send({success: true});
});

server.put(`/customer/:customerID`, isLoggedInMiddleware, async (req, res) => {
    let updatedCustomerInfo = req.body;
    let customerToEdit = await Customer.findOne({where: {customerID: req.params.customerID}});
    Object.assign(customerToEdit, updatedCustomerInfo);
    await customerToEdit.save();
    res.send({customers: await Customer.findAll()});
});

server.delete(`/customer/:customerID`, isLoggedInMiddleware, async (req, res) => {
    await Customer.destroy({where: {customerID: req.params.customerID}});
    res.send({customer: await Customer.findAll()});
});

server.listen(3001, () => {
    console.log("server is listening on port 3001");
});
