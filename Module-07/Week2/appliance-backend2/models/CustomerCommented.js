// all this code is to import sequelize and use it to set up the database structure.

// #11 import sequelize datatypes and assign to variable for use below
const DT = require("sequelize").DataTypes;

// #12 default export of database structure for sequelize to know how to create it in db.js
module.exports = (db => {
    // define table name, object to name the primary key and set it up, keys & formats for remaining columns in table
    return db.define("customer", {
        customerID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DT.STRING,
        lastName: DT.STRING,
        phoneNumber: DT.STRING,
        address1: DT.STRING,
        address2: DT.STRING,
        city: DT.STRING,
        state: DT.STRING(2),
        zipCode: DT.STRING(5)
    });
});