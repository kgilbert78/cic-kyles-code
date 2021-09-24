const Sequelize = require("sequelize");
const db3 = new Sequelize("postgres://kylegilbert@localhost:5432/bestsellerreadinglist3", {logging: false});

const ReadingListBook = require("./ReadingListBook3")(db3);
const User = require("./User")(db3);
const Book = require("./Book")(db3);

(async () => {
    await db3.authenticate();
    console.log("the database is connected");

    User.hasMany(ReadingListBook, {foreignKey: "userID"});
    ReadingListBook.belongsTo(Book, {foreignKey: "bookID"});

    await db3.sync(); //{force: true}

})();

module.exports = {db3, User, ReadingListBook, Book};