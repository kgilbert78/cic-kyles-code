const childPrice = 1.5;
const adultPrice = 4;

const totalEarnings = 5050;

let adults = 2200;
let children = 0;

let problemIsSolved = false;

while (!problemIsSolved) {
    const hypotheticalEarnings = (children * childPrice) + (adults * adultPrice);
    if (hypotheticalEarnings === totalEarnings) {
        problemIsSolved = true;
    } else {
        adults = adults - 1;
        children = children + 1;
    }
}

console.log('Adults: ', adults);
console.log('Children: ', children);