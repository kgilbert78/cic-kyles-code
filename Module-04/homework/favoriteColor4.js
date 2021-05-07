// Write a function that takes a string color as an argument (e.g. 'red'), and returns true if it is your favorite color, or false if it is not your favorite color.

let prompt = require('prompt-sync')();
let colorEntered = prompt('Guess my favorite color: ');

function favoriteColor(prompt) {
    const myColor = 'purple';
    if (colorEntered !== 'purple') {
        return false;
    } else  {
        return true
    }
}

favoriteColor(colorEntered);

while (favoriteColor(colorEntered) === false) {
    colorEntered = prompt('Guess again: ');
    favoriteColor(colorEntered);
}
if (favoriteColor(colorEntered) === true) {
    console.log('You guessed right!')
}



