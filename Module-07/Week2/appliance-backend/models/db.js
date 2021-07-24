const Sequelize = require("sequelize");

const db = new Sequelize("postgres://kylegilbert@localhost:5432/appliances", {logging: false});

const Customer = require("./Customer")(db);
const User = require("./User")(db);

const connectToDB = async () => {
    await db.authenticate();
    console.log('db connected successfully');
    db.sync();
};

connectToDB();

module.exports = { db, Customer, User };