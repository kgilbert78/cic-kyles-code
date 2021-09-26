const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("readingListBook", {
        readingListBookID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        readingListID: DT.INTEGER,
        bookID: DT.INTEGER,
        didRead: DT.BOOLEAN
    });
});