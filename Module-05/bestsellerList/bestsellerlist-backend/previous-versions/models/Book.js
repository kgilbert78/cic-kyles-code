const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("book", {
        bookID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        title: DT.STRING,
        author: DT.STRING, 
        amazonLink: DT.STRING,
        categoryCode: DT.STRING,
        categoryName: DT.STRING
    });
});