import "./SearchGrid.scss"
import { ProductCard } from "../ProductCard/ProductCard";
export const SearchGrid = (props) => {
    {/* account for the time it takes for the axios call to come back. don't return anything until it does and the items are there. */}
    if (!props.items) {
        return null;
    }
    return (
        <div className="SearchGrid">
            <div className="row pl-4 l-md-5 pr-4 pr-md-5">
                {props.items.map(item => (
                    <div key={item.id} className="col-6 col-md-3 mb-3">
                        <ProductCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}