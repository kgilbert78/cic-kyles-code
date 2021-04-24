// Write a function that takes a string color as an argument (e.g. 'red'), and returns true if it is your favorite color, or false if it is not your favorite color.

function favoriteColor(colorEntered) {
    const myColor = 'purple';
    if (colorEntered === 'purple') {
        console.log('You guessed right!');
    } else {
        console.log('Oops, guess again!');
    }
}
let colorEntered = favoriteColor('purple');