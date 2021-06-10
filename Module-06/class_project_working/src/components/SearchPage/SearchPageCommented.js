// no {} because axios is default export from this package, according to documentation. Can call it anything because it renames the default
import axios from "axios";
import { useEffect, useState } from "react";

import { SearchGrid } from "./SearchGrid";

export const SearchPage = (props) => {

    // store data pulled by useEffect
    const [items, setItems] = useState(null); 

// make the API call the first time the component renders by using useEffect.
    useEffect(() => {
        axios.get("/api/product-search", {
            params: {
                query: '',
                filterBy: '',
                sortBy: ''
            }
        }).then((response) => {
            setItems(response.data.items);
        })
    }, []);

    return (
        <div className="SearchPage">
            <div>Search Input</div>
            <div>Search Options</div>
            <SearchGrid items={items} />
            
        </div>
    )
}
// <div>{JSON.stringify(items, null, 4)}</div>