let promise3 = axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=YC7F434qQ2icxGUGalXKqVKPXQ0ZqDGv', {headers:{"Accept": "application/json"}});
        promise3.then(function(response){
            console.log(response.status);
            console.log(response.data.results.lists[0].display_name)
        });

let promise4 = axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=YC7F434qQ2icxGUGalXKqVKPXQ0ZqDGv', {headers:{"Accept": "application/json"}});
promise4.then(function(response){
    console.log(response.status);
    categories = response.data.results.lists;
    for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
        console.log(response.data.results.lists[categoryIndex].display_name)
    }
});

let promise5 = axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=YC7F434qQ2icxGUGalXKqVKPXQ0ZqDGv', {headers:{"Accept": "application/json"}});
promise5.then(function(response){
    console.log(response.status);
    categories = response.data.results.lists;
    for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
        console.log(categories[categoryIndex].display_name);
        let books = response.data.results.lists[categoryIndex].books;
        for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
            console.log(books[bookIndex].title);
            console.log(books[bookIndex].author);
            console.log(books[bookIndex].book_image);
        };
    };
});