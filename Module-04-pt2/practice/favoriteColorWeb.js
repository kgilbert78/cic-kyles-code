let colorEntered = "";

function guessColor(event) {
    event.preventDefault();
    const formField = document.getElementById("userGuess");
    console.log(formField.value);
    /*let*/colorEntered = formField.value;  /* error "colorEntered is not defined" because it's scoped within the function only. Tryed moving it out of the function, caused error "formField is not defined"... try creating it empty outside the function and assigning formfield data here */
    const myColor = 'purple';
    let colorEnteredLowercase = colorEntered.toLowerCase();
    if (colorEnteredLowercase !== 'purple') {
        return false;
    } else  {
        return true
    }
}
console.log(guessColor(colorEntered));

// guessColor(colorEntered);

// while (guessColor(colorEntered) === false) {
//     colorEntered = console.log('Guess again: ');
//     guessColor(colorEntered);
// }
// if (guessColor(colorEntered) === true) {
//     console.log('You guessed right!')
// }



// ORIGINAL CODE FOR USE IN THE TERMINAL

// let prompt = require('prompt-sync')();
// let colorEntered = prompt('Guess my favorite color: ')

// function favoriteColor(prompt) {
//     const myColor = 'purple';
//     let colorEnteredLowercase = colorEntered.toLowerCase();
//     if (colorEnteredLowercase !== 'purple') {
//         return false;
//     } else  {
//         return true
//     }
// }

// favoriteColor(colorEntered);

// while (favoriteColor(colorEntered) === false) {
//     colorEntered = prompt('Guess again: ');
//     favoriteColor(colorEntered);
// }
// if (favoriteColor(colorEntered) === true) {
//     console.log('You guessed right!')
// }
