let bestsellerDiv = document.getElementById("bestsellerLists");
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
// bestsellerDiv.innerHTML = bestsellerData;

let categories = bestsellerData.results.lists;
for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
    const categoryDiv = document.createElement("div");
    // const categoryDiv = document.body.getElementsByTagName("main").createElement("div");
    console.log(categories[categoryIndex].display_name);
    categoryDiv.innerHTML = categories[categoryIndex].display_name;
    document.body.appendChild(categoryDiv);
    let books = categories[categoryIndex].books;
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = books[bookIndex].title;
        console.log(books[bookIndex].title);
        document.body.appendChild(bookDiv);
    };
};




// categories = bestsellerData.results.lists;
// for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
//     console.log(categories[categoryIndex].display_name)
//     let books = categories[categoryIndex].books;
//         for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
//             console.log(books[bookIndex].title);
//             console.log(books[bookIndex].author);
//             console.log(books[bookIndex].book_image);
//         };
// };
