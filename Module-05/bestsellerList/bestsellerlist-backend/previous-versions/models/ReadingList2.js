const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("readinglist2", {
        readingListID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        userID: DT.INTEGER,
    });
});