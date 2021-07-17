// all this code is to import sequelize, tell it where to connect to, open the connection, and make sure it's working.

// #23 import sequelize. database translation to/from sql coming from here.
const Sequelize = require("sequelize");
// 24 create db variable for use in all 3 files. assign it a new sequelize database connection. the stuff between the () is all the settings in beekeeper: tell it to use postgres, specify location of database which is my mac username from the postgres app @localhost, postgres's default port # that postgres app started our db on, and name/filepath of database that we created in beekeeper.  
const db = new Sequelize(`postgres://kylegilbert@localhost:5432/messages2`);

// #27 write async code to connect to database. call anonymous function with () at end (see note)
(async () => {
    // wrap database authentication in try/catch so we can print error message if it fails
    try {
        // #28 authenticate db with sequelize's function, which is coming from import above & npm. tests connection by running 1+1 on database and printing it to the console. (equivalent of SELECT NOW(); )
        await db.authenticate();
        // without async this console log will print regardless of whether it connects to the db. that it prints after the 1+1 message shows it connected and awaited db.authenticate's test before running.
    // #29 console log in callback to test connection
    console.log("db connected successfully");
    } catch (err) {
        console.error("db connection failed");
    };
    // #30 import Message file after database authenticates. pass db as the parameter for the whole import function (require("./Message")) because the module.exports function in Message.js needs it to know what to connect to & define. added extra () to help clarify.
    (require("./Message"))(db);
    // #31 tell sequelize to sync the models (Message.js & this file) to the database - go create the tables. Then go to beekeeper & refresh entitities to see table & columns. Then go to server to create endpoints
    db.sync();  // does not re-create the database every time it loads, unless you tell it to with { force: true }: https://sequelize.org/master/manual/model-basics.html#model-synchronization
})();
// ^ these () to call the whole anonymous async function immediately after creating it. helps us use the await keyword to do it this way.
// alternative: name the function const connectToDB = async () => {}; and then call connectToDB();

// 25 export database
module.exports = { db };
