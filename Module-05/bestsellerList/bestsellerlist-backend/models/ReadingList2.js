const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("readinglist2", {
        readingListID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        // bookID: DT.INTEGER,
        userID: DT.INTEGER,
        didRead: DT.BOOLEAN
    });
});