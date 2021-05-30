document.body.onload = addElement;
//let bestsellerDiv = document.getElementById("bestsellerLists");
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
// bestsellerDiv.innerHTML = bestsellerData;



function addElement () {
    const newDiv = document.createElement("div");
    let categories = bestsellerData.results.lists;
    for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
        const categoryDiv = document.createElement("div");
        // const categoryDiv = document.body.getElementsByTagName("main").createElement("div");
        console.log(categories[categoryIndex].display_name);
        categoryDiv.innerHTML = categories[categoryIndex].display_name;
        newDiv.appendChild(categoryDiv);
        // let books = categories[categoryIndex].books;
        // for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        //     const bookDiv = document.createElement("div");
        //     bookDiv.innerHTML = books[bookIndex].title;
        //     console.log(books[bookIndex].title);
        //     document.body.appendChild(bookDiv);
        // };
        const currentDiv = document.getElementById("bestsellerLists");
        document.body.insertBefore(newDiv, currentDiv.nextSibling);
    };
}