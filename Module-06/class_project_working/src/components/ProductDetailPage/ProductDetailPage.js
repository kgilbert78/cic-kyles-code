import "./ProductDetailPage.scss";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { convertToPrice } from '../../utils/prices';
import { RichText } from "../RichText/RichText";
import { ProductQuantity } from '../ProductQuantity/ProductQuantity';
import { ProductMediaViewer } from './ProductMediaViewer';

export const ProductDetailPage = (props) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        {/* object property value shorthand - can just put { id } no colon because the variable after the colon has the same name as the key  */}
        axios.get("/api/product", { params: { id: id } }).then((response) => { setItem(response.data) })
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
                        <div>
                            <ProductQuantity 
                            quantity={quantity} 
                            handleIncrease={() => {
                                setQuantity(quantity + 1);
                            }} 
                            handleDecrease={() => {
                                setQuantity(quantity <= 1 ? 1 : quantity - 1)
                            }} 
                        />
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
