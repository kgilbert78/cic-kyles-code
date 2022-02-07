import "./ProductQuantity.scss"

export const ProductQuantity = (props) => {

/* Props needed for the functions in the parent ProductDetailPage:
    props.quantity - # to display btw +/- buttons
    props.handleIncrease
    props.handleDecrease
 * Additional props needed:
    props.hideLabel - for mobile (where the label is already somewhere else displaying via a different component), and on cart page
*/

    return (
        <div className="ProductQuantity">
            <div className="d-flex flex-md-column justify-content-between align-items-center align-items-md-start">
                {/* see note at end of code */}
                {!props.hideLabel && (
                    <div className="ProductQuantity__Label mr-3">Quantity</div>
                )}
                <div className="ProductQuantity__Box d-flex justify-content-between">
                    {/* call functions from parent div in ProductDetailPage */}
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


/* 
MDN: The logical AND (&&) operator (logical conjunction) f
or a set of operands is true if and only if all of its operands are true. 
expr1 && expr2 

From above:
{!props.hideLabel && (
    <div className="ProductQuantity__Label mr-3">Quantity</div>
)}

...is theoretically:
{if (hideLabel !== true && <div className="ProductQuantity__Label mr-3">Quantity</div> === true) {
  <div className="ProductQuantity__Label mr-3">Quantity</div>
}}


From homework:
{listVisibility && <List list={items} />}

Theoretically:
{if (listVisibility === true && <List list={items} /> === true) {
  <List list={items} />
}}


Translation of example from MDN:

const a = 3;
const b = -2;

console.log("Logical AND:", a > 0 && b > 0);
// expected output: false

if (a > 0 === true && b > 0 === true) {
  console.log("if else:", true);
} else {
  console.log("if else:", false);
}
*/
// works, even with changing the numbers so they both come out true.