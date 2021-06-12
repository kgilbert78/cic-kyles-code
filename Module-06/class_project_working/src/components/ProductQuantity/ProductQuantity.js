import "./ProductQuantity.scss"

export const ProductQuantity = (props) => {

/* Props needed:
    props.quantity - # to display btw +/- buttons
    props.handleIncrease
    props.handleDecrease
    props.hideLabel - for mobile (already somewhere else in diff component on label), and on cart page
*/

    return (
        <div className="ProductQuantity">
            <div className="d-flex flex-md-column justify-content-between align-items-center align-items-md-start">
                {!props.hideLabel && (
                    <div className="ProductQuantity__Label mr-3">Quantity</div>
                )}
                <div className="ProductQuantity__Box d-flex justify-content-between">
                    <div className="ProductQuantity__Increase" onClick={props.handleIncrease}>
                         + 
                    </div>
                    <div className="ProductQuantity__Quantity">
                        {props.quantity}
                    </div>
                    <div className="ProductQuantity__Decrease" onClick={props.handleDecrease}>
                         - 
                    </div>
                </div>
            </div>
        </div>
    )
}