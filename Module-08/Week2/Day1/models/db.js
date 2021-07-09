const Sequelize = require("sequelize");
const db = new Sequelize(`postgres://kylegilbert@localhost:5432/messages2`);

(async () => {
    try {
        await db.authenticate();
    console.log("db connected successfully");
    } catch (err) {
        console.error("db connection failed");
    };
    (require("./Message"))(db);
    db.sync();
})();

module.exports = { db };
