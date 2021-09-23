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

    await db3.sync({force: true}); //{force: true}

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

        // create books before creating readingListBooks, so it can match the bookIDs when it makes the readingListBook records. take this into account when sending data from frontend too.
        await Book.create({
            title: "IT ENDS WITH US",
            author: "Colleen Hoover", 
            amazonLink: "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
            categoryCode: "combined-print-and-e-book-fiction",
            categoryName: "Combined Print & E-Book Fiction"
        });
        await Book.create({
            title: "THE MADNESS OF CROWDS",
            author: "Louise Penny", 
            amazonLink: "https://www.amazon.com/dp/1250145260?tag=NYTBSREV-20",
            categoryCode: "combined-print-and-e-book-fiction",
            categoryName: "Combined Print & E-Book Fiction"
        });
        await Book.create({
            title: "BILLY SUMMERS",
            author: "Stephen King", 
            amazonLink: "https://www.amazon.com/dp/1982173610?tag=NYTBSREV-20",
            categoryCode: "combined-print-and-e-book-fiction",
            categoryName: "Combined Print & E-Book Fiction"
        });
        await Book.create({
            title: "A SLOW FIRE BURNING",
            author: "Paula Hawkins", 
            amazonLink: "https://www.amazon.com/dp/1982159006?tag=NYTBSREV-20",
            categoryCode: "combined-print-and-e-book-fiction",
            categoryName: "Combined Print & E-Book Fiction"
        });
        await Book.create({
            title: "BEAUTIFUL COUNTRY",
            author: "Qian Julie Wang", 
            amazonLink: "https://www.amazon.com/dp/0385547218?tag=NYTBSREV-20",
            categoryCode: "combined-print-and-e-book-nonfiction",
            categoryName: "Combined Print & E-Book Nonfiction"
        });
        await Book.create({
            title: "BEAUTIFUL WORLD, WHERE ARE YOU",
            author: "Sally Rooney", 
            amazonLink: "https://www.amazon.com/dp/0374602603?tag=NYTBSREV-20",
            categoryCode: "combined-print-and-e-book-fiction",
            categoryName: "Combined Print & E-Book Fiction"
        });

        await ReadingListBook.create({
            userID: user1.userID,
            bookID: 1,
            didRead: false
        });
        await ReadingListBook.create({
            userID: user1.userID,
            bookID: 2,
            didRead: false
        });
        await ReadingListBook.create({
            userID: user1.userID,
            bookID: 5,
            didRead: true
        });
        await ReadingListBook.create({
            userID: user1.userID,
            bookID: 6,
            didRead: false
        });
        await ReadingListBook.create({
            userID: user2.userID,
            bookID: 3,
            didRead: false
        });
        await ReadingListBook.create({
            userID: user2.userID,
            bookID: 4,
            didRead: false
        });
        await ReadingListBook.create({
            userID: user2.userID,
            bookID: 6,
            didRead: true
        });
    }
})();

module.exports = {db3, User, ReadingListBook, Book};