let bigList = {
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
                    },
                    {
                        author: "John Grisham",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780385547680.jpg",
                        title: "SOOLEY",
                    },
                    {
                        author: "Stacey Abrams",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780385546577.jpg",
                        title: "WHILE JUSTICE SLEEPS",
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
                    },
                    {
                        author: "Carol Leonnig",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9780399589010.jpg",
                        title: "ZERO FAIL",
                    },
                    {
                        author: "Bill O'Reilly and Martin Dugard",
                        book_image: "https://storage.googleapis.com/du-prd/books/images/9781250273659.jpg",
                        title: "KILLING THE MOB",
                    },
                ]
            }
        ]
    }
};

categories = bigList.results.lists;
for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
    console.log(categories[categoryIndex].display_name)
    let books = categories[categoryIndex].books;
        for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
            console.log(books[bookIndex].title);
            console.log(books[bookIndex].author);
            console.log(books[bookIndex].book_image);
        };
};
