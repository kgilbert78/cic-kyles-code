const Sequelize = require("sequelize");
const db2 = new Sequelize("postgres://kylegilbert@localhost:5432/bestsellerreadinglist2", {logging: false});

const ReadingList2 = require("./ReadingList2")(db2);
const User = require("./User")(db2);
const Book = require("./Book")(db2);

(async () => {
    await db2.authenticate();
    console.log("the database is connected");

    ReadingList2.belongsTo(User, {foreignKey: "readingListID"});
    // User.hasOne(ReadingList2, {foreignKey: "userID"});
    // Book.belongsTo(ReadingList2, {foreignKey: "bookID"});
    ReadingList2.hasMany(Book, {foreignKey: "readingListID"}); // change Book.js & ReadingList2.js
    
    await db2.sync({force: true});

    const users = await User.findAll();
    if (users.length === 0) {
        const user1 = await User.create({
            username: "kyle",
            auth0AccessCode: 1234
        });
        const user2 = await User.create({
            username: "lindsay",
            auth0AccessCode: 5678
        });

        await ReadingList2.create({
            userID: user1.userID,
            // didRead: DT.BOOLEAN
        });
        await ReadingList2.create({
            userID: user2.userID,
            // didRead: DT.BOOLEAN
        });

        await Book.create({
            title: "IT ENDS WITH US",
            author: "Colleen Hoover", 
            amazonLink: "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
            readingListID: 1
        });
        await Book.create({
            title: "THE MADNESS OF CROWDS",
            author: "Louise Penny", 
            amazonLink: "https://www.amazon.com/dp/1250145260?tag=NYTBSREV-20",
            readingListID: 1
        });
        await Book.create({
            title: "BILLY SUMMERS",
            author: "Stephen King", 
            amazonLink: "https://www.amazon.com/dp/1982173610?tag=NYTBSREV-20",
            readingListID: 2
        });
        await Book.create({
            title: "A SLOW FIRE BURNING",
            author: "Paula Hawkins", 
            amazonLink: "https://www.amazon.com/dp/1982159006?tag=NYTBSREV-20",
            readingListID: 2
        });

        console.log(await ReadingList2.findOne({where: {readingListID: 1}, include: [{model: User}]}))
    }
})();

module.exports = {db2, ReadingList2, User, Book};