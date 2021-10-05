const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("user", {
        userID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        username: DT.STRING,
        accessCode: DT.STRING
    });
});