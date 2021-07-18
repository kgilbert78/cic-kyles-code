const Sequelize = require("sequelize");
const db = new Sequelize("postgres://kylegilbert@localhost:5432/appliances2", {logging: false});

const Customer = require("./Customer")(db);

(async () => {
    await db.authenticate();
    console.log("the database is connected");

    db.sync();
})();

module.exports = {db, Customer};