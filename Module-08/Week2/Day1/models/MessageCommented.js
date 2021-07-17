// all this code is to import sequelize and use it to set up the database structure

// #16 import sequelize translation feature for assigning datatypes to columns
const DataTypes = require("sequelize").DataTypes;
// console.log("this is coming from my Message.js file"); // tests import in db.js

// #17 default export - no {} after =. db passed as parameter here from server.js (where this file is imported).  Will import db to this file later.
module.exports = (db) => {
    // #18 define model - set up structure of database for sequelize to create it
    return db.define(
        // #19 give sequelize the table name as a string
        "message",
        // #20 - show sequelize what the table object will look like:
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
        // #21 tell sequelize we will manage the timestamps ourselves. https://sequelize.org/master/manual/model-basics.html#timestamps
        {timestamps: false}
    )
};

// #22 create db.js in models & switch to it.