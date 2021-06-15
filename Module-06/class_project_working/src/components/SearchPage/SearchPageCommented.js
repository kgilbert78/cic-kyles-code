// no {} because axios is default export from this package, according to documentation. Can call it anything because it renames the defaultimport axios from "axios";
import { useEffect, useState } from "react";

import { SearchGrid } from "./SearchGrid";
import { SearchInput } from "./SearchInput";
import { SearchPageOption } from "./SearchPageOption";
import "./SearchPage.scss";

const filterOptions = [
    { text: 'Filters', value: ''},
    { text: 'Tour', value: 'tour'},
    { text: 'Backpacking', value: 'backpacking'}    
];
const sortOptions =[
    { text: 'Bestselling', value: 'bestselling'},
    { text: 'Price Ascending', value: 'price-ascending'},
    { text: 'Price Decending', value: 'price-descending'}  
];
const defaultQuery = "";
const defaultFilterBy = "";
const defaultSortBy = "best-selling";

export const SearchPage = (props) => {
    // store data pulled by useEffect
    const [items, setItems] = useState(null); 
    // hold on to whatever the user typed so you can add it to the array of times to make the axios call at the end of useEffect    also I would call this userQuery and setUserQuery to avoid confusion with the parameter query and it's key - fix this later
    const [query, setQuery] = useState("");
    const [filterBy, setFilterBy] = useState(defaultFilterBy);
    const [sortBy, setSortBy] = useState(defaultSortBy);

// API call with paramaters
    useEffect(() => {
        axios.get("/api/product-search", {
            params: {
                query, // same as query: query, (ok because same name)  query: userQuery, if I change the variable name in useState
                filterBy,
                sortBy,
            }
        }).then((response) => {
            setItems(response.data.items);
        })
    }, [query, filterBy, sortBy]);
// make the API call the first time the component renders by using useEffect, and don't make it again unless [query, filterBy or sortBy] change.


    return (
        <div className="SearchPage">
            <div className="SearchPage__ResultsFor">
                {items && query && `${items.length} Results for "${query}"`}
            </div>
            <div className="row pl-4 pl-md-0 pr-4-md-0">
                <div className="d-none col-md-3"></div>
                <div className="col-md-6">
                    {/* onSubmit for input & button in SearchInput component. callback takes event. */}
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        // set the next query to our input data. looking at onSubmit event which gives you access to   the part of the dom where the form data is held. document.querySelector('') takes css selector for the thing in the dom you want to target. grab .className or #id. will give you the first thing that matches. syntax below says give me the input with a name attribute set to the value of query because the SearchInput component below has name attribute set to the value of query. [] is syntax for accessing an attribute. then you want the value of that with .value to see what the user actually typed.
                        const searchInputValue = event.target.querySelector("input[name=query]").value;
                        setQuery(searchInputValue);
                    }}>
                        {/* name from parameter from axios call. name will indicate the key on the object that gets created when storing the input. */}
                        <SearchInput name="query" />
                    </form>
                </div>
            </div>
            <div className="SearchPage__OptionsRow row pl-4 pl-md-4 pr-4 pr-md-0">
                <div className="col-md-1 d-none d-md-block" />
                <div className="d-flex d-md-none align-items-center justify-content-end col-md-4">
                    {(items || []).length} Products
                </div>
                <SearchPageOption text="Filter By" options={filterOptions} value={filterBy} onChange={(value) => setFilterBy(value)} />
                <SearchPageOption text="Sort By" options={sortOptions} value={filterBy} onChange={(value) => setSortBy(value)} />
                <div className="d-none d-md-flex align-items-center justify-content-end col-md-4">
                {(items || []).length} Products
                </div>
            </div>
            <SearchGrid items={items} />
            
        </div>
    )
}
// <div>{JSON.stringify(items, null, 4)}</div>