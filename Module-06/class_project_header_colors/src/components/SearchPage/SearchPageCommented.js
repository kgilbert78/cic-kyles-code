// no {} because axios is default export from this package, according to documentation. Can call it anything because it renames the defaultimport axios from "axios";
import { useEffect, useState } from "react";

import { SearchGrid } from "./SearchGrid";
import { SearchInput } from "./SearchInput";
import { SearchPageOption } from "./SearchPageOption";
import "./SearchPage.scss";

// loop through these in SearchPageOption.js
const filterOptions = [
    { text: 'Filters', value: ''},
    { text: 'Tour', value: 'tour'},
    { text: 'Backpacking', value: 'backpacking'}    
];
// loop through these in SearchPageOption.js
const sortOptions =[
    { text: 'Bestselling', value: 'bestselling'},
    { text: 'Price Ascending', value: 'price-ascending'},
    { text: 'Price Decending', value: 'price-descending'}  
];
// set default start values for dropdowns whose options are defined above. don't filter anything out by using empty string.
const defaultQuery = "";
const defaultFilterBy = "";
const defaultSortBy = "best-selling";

export const SearchPage = (props) => {
    // store data pulled by useEffect
    const [items, setItems] = useState(null); 
    // hold on to whatever the user typed so you can add it to the array of times to make the axios call at the end of useEffect. set default values from above as initial values of each for initial display. variable name is the same as key name in axios call that's being expected.    I would call this userQuery and setUserQuery to avoid confusion with the parameter query and it's key - fix this later & figure out how to match up so it still calls the right thing.
    const [query, setQuery] = useState(defaultQuery);
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
    }, [query, filterBy, sortBy]); // these are the VARIABLES not the keys
// make the API call the first time the component renders by using useEffect, and don't make it again unless [query, filterBy or sortBy] change.


    return (
        <div className="SearchPage">
            <div className="SearchPage__ResultsFor">
                {/* display results for user's specific query. if items is truthy (only display if there are items) and query is truthy (query was made), check length of items (array of objects) to display how many items came back. if all items in this "logical and" statement are true, return the last item */}
                {items && query && `${items.length} Results for "${query}"`}
                {/* returns the VALUE of the last thing if all are true.
                Theoretically the same as:
                {if (items === true && query === true && `${items.length} Results for "${query}"` === true) {
                    `${items.length} Results for "${query}"` />
                }}
                so in the MDN example modified so it evalutes to true:
                {`${3 > 0 && 2 > 0}`} 
                it's returning true because the value of the last thing is true.
                But here the value of the last thing are the number for "items.length" in the object, and the string for the variable "query".
                */}
            </div>
            <div className="row pl-4 pl-md-0 pr-4-md-0">
                <div className="d-none col-md-3"></div>
                <div className="col-md-6">
                    {/* onSubmit for input & button in SearchInput component. callback takes event. */}
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        // set the next query to our input data. looking at onSubmit event which gives you access to   the part of the dom where the form data is held. document.querySelector('') takes css selector for the thing in the dom you want to target. grab .className or #id. will give you the first thing that matches. syntax below requests the input with a name attribute set to the value of query because the SearchInput component below has name attribute set to the value of query. [] is syntax for accessing an attribute. then you want the value of that with .value to see what the user actually typed.
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
                    {/* MOBILE */}
                    {/* check to see if any items present from result of api call. display empty array if no items. without this if there are no items the value is null and it will throw an error */}
                    {(items || []).length} Products
                </div>
                {/* filterOptions const from top of page, filterBy from const w/useState at top, onChange set filterBy to the new value from onChange in <select> on SearchPageOption.js onChange is a function that's being passed the value of the select element in SearchPageOption.js by the parameter "value". use it to update filterBy piece of state. Now add to useEffect array at end of things to make an api call when they change. otherwise it won't update the trips. */}
                <SearchPageOption text="Filter By" options={filterOptions} value={filterBy} onChange={(value) => setFilterBy(value)} />
                <SearchPageOption text="Sort By" options={sortOptions} value={filterBy} onChange={(value) => setSortBy(value)} />
                <div className="d-none d-md-flex align-items-center justify-content-end col-md-4">
                    {/* DESKTOP */}
                    {(items || []).length} Products
                </div>
            </div>
            <SearchGrid items={items} />
            
        </div>
    )
}
// json data for testing before adding html - first parameter is the value to convert to a json string. second parameter allows for filtering the properties of the object to be included in the json string - set to null to include all properties. last parameter is # of spaces to indent when displaying code. 
// <div>{JSON.stringify(items, null, 4)}</div>