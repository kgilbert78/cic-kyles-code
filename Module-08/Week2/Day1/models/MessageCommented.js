// import sequelize translation feature for assigning datatypes to columns
const DataTypes = require("sequelize").DataTypes;
// console.log("this is coming from my Message.js file"); // tests import in db.js

// default export - no {} after =. db passed as parameter here from server.js (where this file is imported).
module.exports = (db) => {
    // define model - set up structure of database
    return db.define(
        // table name = message
        "message",
        // table is object
        {
            // create id column - make it an object so we can pass it several pieces of info. assign it a sql datatype, make it primary key & tell sql to autoincrement
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            // create columns and assign sql datatypes to them
            timestamp: DataTypes.DATE,
            content: DataTypes.TEXT,
            received: DataTypes.BOOLEAN,
        },
        // tell sequelize we will manage the timestamps ourselves. https://sequelize.org/master/manual/model-basics.html#timestamps
        {timestamps: false}
    )
};