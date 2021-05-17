function myFunc3() {
    console.log("myFunc3 just ran");
}
function myFunc4() {
    console.log("myFunc4 just ran");
}

function withParameter(num) {
    console.log(`My 5th function just ran with ${num} as the parameter`);
}

function doubleNumber (num) {
    return num * 2;
}

module.exports = {myFunc3, myFunc4, withParameter, doubleNumber};