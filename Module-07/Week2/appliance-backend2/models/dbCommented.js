// all this code is to import sequelize, tell it where to connect to, open the connection, make sure it's working, and sync new information to the database (or create the table the first time you run it.

// #7 import sequelize for database translation to & from sql
const Sequelize = require("sequelize");

// #8 create db variable and assign it to create a new database connection using postgres at my localhost & postgres default port, and the filepath. set logging to false so the huge list of everything sequelize is doing doesn't appear in the console every time you save.
const db = new Sequelize("postgres://kylegilbert@localhost:5432/appliances2", {logging: false});

// #13 require("./Customer")(db); import Customer database structure and pass it the database as created above with Sequelize
// #15 added const Customer so we can export this to server.js
const Customer = require("./Customer")(db);

// #9 asynchronous function to connect to the database. runs immediately because of () at the end.
(async () => {
    // this tests the connection & prints 1+1 to the console if logging is not turned off.
    await db.authenticate();
    // my own test will print to the console only after the db authenticates, regardless of whether it prints the 1+1 test
    console.log("the database is connected");

    // #14 synchronize data from the model(s) to the table(s) in the database, or create the tables when running for the first time.
    db.sync();
})();
// #10 export the database and then go to server.js to import it 
// #16 added Customer to export & go to server.js to import it
module.exports = {db, Customer};