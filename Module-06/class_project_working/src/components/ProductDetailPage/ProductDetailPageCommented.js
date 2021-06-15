import "./ProductDetailPage.scss";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { convertToPrice } from '../../utils/prices';
import { RichText } from "../RichText/RichText";
import { ProductQuantity } from '../ProductQuantity/ProductQuantity';
import { ProductMediaViewer } from './ProductMediaViewer';

export const ProductDetailPage = (props) => {
    // useParams creates object of all the query parameters in the url, with key of id in this case
    // check that id works before creating ProductDetailPage html: return <div className "ProductDetailPage">Product id: {id}</div>
    const { id } = useParams();
    // version without destructured object:
    // const queryParams = useParams()
    // const id = queryParams.id
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        {/* object property value shorthand - can just put params: { id } instead of params: { id: id } because the variable after the colon has the same name as the key  */}
        axios.get("/api/product", { params: { id } }).then((response) => { setItem(response.data) })
    }, [])

if (!item) {
    return null;
}

    return (
        <div className="ProductDetailPage">
            {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
            <div className="row ml-3 mr-3 mt-4 mt-md-5">
                {/* if you don't define mobile size it fills the whole screen for mobile */}
                <div className="col-md-6">
                    <ProductMediaViewer media={item.media} />
                </div>

                <div className="col-md-6">
                    <div className="ProductDetailPage__Name">{item.name}</div>
                    <div className="Price">{convertToPrice(item.price)}</div>
                
                    {/* d- is bootstrap for "display:" in css file */}
                    <div className="ProductDetailPage__ActionRow d-block d-md-flex align-items-md-end mb-4">
                        {/* define logic in the parent and pass down functions that allow the child ProductQuantity to do something that affects the parent. data stored here in parent component. not passing data up - passing down a function that handles the data change we want to see in the parent. can't pass props up - call function that's at a higher level instead. */}
                        <div>
                            <ProductQuantity 
                            quantity={quantity} 
                            handleIncrease={() => {
                                setQuantity(quantity + 1);
                            }} 
                            /* if statement to prevent counter going below 1. ternary operator: if quantity is less than or equal to 1 then set it to 1, else set it to quantity - 1 (onClick coming from child) */
                            handleDecrease={() => {
                                setQuantity(quantity <= 1 ? 1 : quantity - 1)
                            }} 
                        />
                        {/* for larger applications with many buttons don't use anonymous functions like above. define the function somewhere else and then import it and use it there, because every time react renders, the anonymous functions are re-created, which is one more thing react has to do before it makes it to the DOM  */}
                        </div>
                        <button className="ProductDetailPage__AddToCartButton btn btn-primary mt-3 ml-md-3">
                            Add to Cart
                        </button>
                    </div>

                    <div className="ProductDetailPage__Description">
                        <div className="ProductDetailPage__DescriptionLabel">
                            The Details
                        </div>
                        <RichText text={item.description} />
                    </div>
                </div>
            </div>    
        </div>
    )
}
