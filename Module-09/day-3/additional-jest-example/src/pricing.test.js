import { calculateTotal } from "./pricing";

describe("calculateTotal", () => {
    test("should add up the items currently in the cart", () => {
        let cartItems = [
            {name: 'Lenovo power adapter', price: 10},
            {name: 'Zozo AC Adapter', price: 14},
            {name: 'Switching Adapter (19v)', price: 3},
        ];
        const total = calculateTotal(cartItems, 0);
        expect(total).toEqual(27);
    });

    test("should handle an empty cart", () => {
        const cartItems = [];
        const total = calculateTotal(cartItems, 0);
        expect(total).toEqual(0);
    });

    test("includes sales tax", () => {
        let cartItems = [
            {name: 'Lenovo power adapter', price: 10},
            {name: 'Zozo AC Adapter', price: 14},
            {name: 'Switching Adapter (19v)', price: 3},
        ];
        const total = calculateTotal(cartItems, 0.10);
        expect(total).toEqual(29.7);
    });

    test("it should not allow sales tax less than 0", () => {
        let cartItems = [
            {name: 'Lenovo power adapter', price: 10},
            {name: 'Zozo AC Adapter', price: 14},
            {name: 'Switching Adapter (19v)', price: 3},
        ];
        const total = calculateTotal(cartItems, -0.05);
        expect(total).toEqual(27);
    });

    test("it should not allow sales tax greater than 0.20", () => {

    });
});