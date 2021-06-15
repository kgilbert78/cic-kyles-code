import axios from "axios";
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

    const [items, setItems] = useState(null); 
    const [query, setQuery] = useState("");
    const [filterBy, setFilterBy] = useState(defaultFilterBy);
    const [sortBy, setSortBy] = useState(defaultSortBy);

    useEffect(() => {
        axios.get("/api/product-search", {
            params: {
                query, // same as query: query, (ok because same name)
                filterBy,
                sortBy,
            }
        }).then((response) => {
            setItems(response.data.items);
        })
    }, [query, filterBy, sortBy]);

    return (
        <div className="SearchPage">
            <div className="SearchPage__ResultsFor">
                {items && query && `${items.length} Results for "${query}"`}
            </div>
            <div className="row pl-4 pl-md-0 pr-4-md-0">
                <div className="d-none col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        const searchInputValue = event.target.querySelector("input[name=query]").value;
                        setQuery(searchInputValue);
                    }}>
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