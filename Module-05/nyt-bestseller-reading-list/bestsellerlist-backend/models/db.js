const Sequelize = require("sequelize");
const db = new Sequelize("postgres://kylegilbert@localhost:5432/nyt-bestseller-reading-list", {logging: false});

const ReadingListBook = require("./ReadingListBook")(db);
const User = require("./User")(db);
const Book = require("./Book")(db);

(async () => {
    await db.authenticate();
    console.log("Reading List database is connected");

    User.hasMany(ReadingListBook, {foreignKey: "userID"});
    ReadingListBook.belongsTo(Book, {foreignKey: "bookID"});

    await db.sync(); //{force: true}
    
})();

module.exports = {db, User, ReadingListBook, Book};