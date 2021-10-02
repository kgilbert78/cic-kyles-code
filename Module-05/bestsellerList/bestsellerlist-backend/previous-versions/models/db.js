const Sequelize = require("sequelize");
const db = new Sequelize("postgres://kylegilbert@localhost:5432/bestsellerreadinglist1table", {logging: false});

const ReadingList = require("./ReadingList")(db);

(async () => {
    await db.authenticate();
    console.log("the database is connected");
    db.sync();
})();

module.exports = {db, ReadingList};