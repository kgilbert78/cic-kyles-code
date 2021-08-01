export function calculateTotal(cartItems, tax) {
    let total = 0
    if (tax < 0) {
        tax = 0;
        cartItems.map((item) => {
            total += item.price;
        });
    } else {
        cartItems.map((item) => {
            total += item.price;
        });
    };    
    return total + (total * tax);
};
