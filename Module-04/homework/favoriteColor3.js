// Write a function that takes a string color as an argument (e.g. 'red'), and returns true if it is your favorite color, or false if it is not your favorite color.

function favoriteColor(colorEntered) {
    const myColor = 'purple';
    if (colorEntered === 'purple') {
        return true;
    } else {
        return false;
    }
}
let prompt = require('prompt-sync')();
let colorEntered = prompt('Guess my favorite color! Enter a color: ');
console.log(favoriteColor(prompt));
