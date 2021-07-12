let bestsellerData = {
    status: "OK",
    num_results: 90,
    results: {
        bestsellers_date: "2021-05-22",
        lists: [
            {
                list_id: 704,
                display_name: "Combined Print and E-Book Fiction",
                books: [
                    {
                        author: "Laura Dave",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg",
                        title: "THE LAST THING HE TOLD ME",
                        buy_links: [
                            {
                                name: "Amazon",
                                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
                            }
                        ]
                    },
                    {
                        author: "John Grisham",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780385547680.jpg",
                        title: "SOOLEY",
                        buy_links: [
                            {
                                name: "Amazon",
                                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
                            }
                        ]
                    },
                    {
                        author: "Stacey Abrams",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780385546577.jpg",
                        title: "WHILE JUSTICE SLEEPS",
                        buy_links: [
                            {
                                name: "Amazon",
                                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
                            }
                        ]
                    },
                ]
            },
            {
                list_id: 708,
                display_name: "Combined Print and E-Book Nonfiction",
                books: [
                    {
                        author: "John Green",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780525555216.jpg",
                        title: "THE ANTHROPOCENE REVIEWED",
                        buy_links: [
                            {
                                name: "Amazon",
                                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
                            }
                        ]
                    },
                    {
                        author: "Carol Leonnig",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780399589010.jpg",
                        title: "ZERO FAIL",
                        buy_links: [
                            {
                                name: "Amazon",
                                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
                            }
                        ]
                    },
                    {
                        author: "Bill O'Reilly and Martin Dugard",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9781250273659.jpg",
                        title: "KILLING THE MOB",
                        buy_links: [
                            {
                                name: "Amazon",
                                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
                            }
                        ]
                    },
                ]
            }
        ]
    }
};

categories = bestsellerData.results.lists;

categories.map((category) => {
    console.log(category.display_name);
    let books = category.books;
    books.map((book) => {
        console.log(book.title);
        console.log(book.author);
        console.log(book.book_image);
        console.log(book.buy_links[0].name);
    });
});

// for (category of categories) {
//     console.log(category.display_name)
//     let books = category.books;
//         for (book of books) {
//             console.log(book.title);
//             console.log(book.author);
//             console.log(book.book_image);
//             console.log(book.buy_links[0].name);
//         };
// };

// for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
//     console.log(categories[categoryIndex].display_name)
//     let books = categories[categoryIndex].books;
//         for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
//             console.log(books[bookIndex].title);
//             console.log(books[bookIndex].author);
//             console.log(books[bookIndex].book_image);
//             console.log(books[bookIndex].buy_links[0].name);
//         };
// };


