import "./ProductDetailPage.scss";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { convertToPrice } from '../../utils/prices';
import { RichText } from "../RichText/RichText";
import { ProductQuantity } from '../ProductQuantity/ProductQuantity';
import { ProductMediaViewer } from './ProductMediaViewer';
import { Toast, showToast } from "../Toast/Toast";

export const ProductDetailPage = (props) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        axios.get("/api/product", { params: { id } }).then((response) => { setItem(response.data) });
    }, []);

if (!item) {
    return null;
}

    return (
        <div className="ProductDetailPage">
            {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
            <div className="row ml-3 mr-3 mt-4 mt-md-5">
                <div className="col-md-6">
                    <ProductMediaViewer media={item.media} />
                </div>

                <div className="col-md-6">
                    <div className="ProductDetailPage__Name">{item.name}</div>
                    <div className="Price">{convertToPrice(item.price)}</div>
                
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
                        <button className="ProductDetailPage__AddToCartButton btn btn-primary mt-3 ml-md-3"
                        onClick={() => {
                            axios.put("/api/cart-add", { id: item.id, quantity }).then((response) => {
                                showToast(`Added ${quantity} item${quantity > 1 ? 's' : ''} from ${item.name} to cart`)
                            })
                        }}
                        >
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
            <Toast /> 
        </div>
    )
}
