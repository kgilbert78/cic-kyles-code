import { useState } from "react";
import { nytDataDownload } from "./nytDataDownload";
import { DemoBestsellerList } from "./DemoBestsellerList";
import { DemoSideBar } from "./DemoSideBar";

export const DemoVersion = (props) => {

    const [categories, setCategories] = useState([]);
    
    (async () => {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=jhQErSJStIHawxkBeOcyPHcP0nC3O5Dw', {
            method: "GET",
            headers: { "Content-Type": "application/json" } 
        });
        const newYorkTimesData = await response.json();
        // await setCategories(newYorkTimesData?.results?.lists)

        // this logs many times with warnings about too many requests
        // console.log(categories);

        // these log twice
        console.log(newYorkTimesData?.results?.lists)
        console.log(newYorkTimesData?.results?.lists?.[0]?.list_name)
        console.log(newYorkTimesData?.results?.lists?.[0].books?.[0]?.title)
    })();
    

    // setCategories(nytDataDownload.results.lists);
    // console.log(nytDataDownload.results.lists)
    // console.log(nytDataDownload.results.lists[0].books[0].title)

    let sampleData = [
        {
            list_id: 704,
            list_name: "Combined Print and E-Book Fiction",
            list_name_encoded: "combined-print-and-e-book-fiction",
            display_name: "Combined Print & E-Book Fiction"
        },
        {
            list_id: 708, 
            list_name: "Combined Print and E-Book Nonfiction", 
            list_name_encoded: "combined-print-and-e-book-nonfiction", 
            display_name: "Combined Print & E-Book Nonfiction"
        },
        {
            list_id: 1,
            list_name: "Hardcover Fiction",
            list_name_encoded: "hardcover-fiction",
            display_name: "Hardcover Fiction"
        },
        {
            list_id: 2,
            list_name: "Hardcover Nonfiction",
            list_name_encoded: "hardcover-nonfiction",
            display_name: "Hardcover Nonfiction"
        },
        {
            list_id: 17,
            list_name: "Trade Fiction Paperback", 
            list_name_encoded: "trade-fiction-paperback", 
            display_name: "Paperback Trade Fiction"
        },
        {
            list_id: 4,
            list_name: "Paperback Nonfiction", 
            list_name_encoded: "paperback-nonfiction", 
            display_name: "Paperback Nonfiction"
        }
    ]

    // this causes crash & warning about too many loops
    // setCategories(sampleData);
    
    return (
        <div className="navbar p-2">
            
            <h2>Demo Version Content</h2>

            <div className="col-9">
                <DemoBestsellerList categories={sampleData} />
                {/* <DemoBestsellerList categories={categories} /> */}
            </div>
            <div className="col-3">
                <DemoSideBar />
            </div>

            

        </div>
    );
};