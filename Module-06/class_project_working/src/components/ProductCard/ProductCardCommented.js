import "./ProductCard.scss"
import { convertToPrice } from "../../utils/prices";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
    return (
        <div className="ProductCard">
            {/* BEM naming convention. */}
            <div className="ProductCard__ImageWrapper">
                {/* Pull each bit of data returned from API using props and the proper path. use {} because it's JS data from the API. 
                for image link: use to={} because we need to give the id from the API to the link. use back ticks for the string, mix in string interpolation ${} for the JS portion */}
                <Link className="ProductCard__Link" to={`/products/${props.item.id}`}>
                <img
                    className="ProductCard__Image"
                    src={props.item.thumbnail.src}
                    alt={props.item.thumbnail.alt}
                />
                </Link>
            </div>
            <div className="ProductCard__Details">

                <Link className="ProductCard__Link" to={`/products/${props.item.id}`}>
                    <div className="ProductCard__Name">
                        {props.item.name} ({props.item.rating})
                    </div>
                </Link>
                <div className="ProductCard__Price">
                    {/* run price through function created in price file in utils folder - adds dollar sign and specifies 2 decimal places */}
                    {convertToPrice(props.item.price)}
                </div>
            </div>
        </div>
    )
}