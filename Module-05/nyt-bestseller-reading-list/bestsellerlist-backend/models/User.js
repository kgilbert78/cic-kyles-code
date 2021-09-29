const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("user", {
        userID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        username: DT.STRING,
        auth0AccessCode: DT.STRING, // check video for best datatype
        // readingListID: DT.INTEGER
    });
});