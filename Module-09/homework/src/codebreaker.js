// if the guess is higher than the secret code, return "too high!"
// if the guess is lower than the secret code, return "too low!"
// if the guess is equal to the secret code, return "you cracked the code!"
export const checkGuess = (guess, secretCode) => {
    if (guess === secretCode || guess === "secretCode") {
        return "you cracked the code!";
   } else if (guess < secretCode || typeof guess === "function") {
        return "too low!"
    } else if (guess > secretCode) {
        return "too high!"
    }
}

// Part 1
//
// Write test cases that cover all the behavior of the checkGuess function
console.assert(checkGuess(100, 100) === "you cracked the code!");
console.assert(checkGuess(101, 100) === "too high!");
console.assert(checkGuess(99, 100) === "too low!");
console.assert(checkGuess(100.01, 100) === "too high!");
console.assert(checkGuess(99.01, 100) === "too low!");


// Part 2
//
// Uncomment the following assertion, but don't change them!
// Change the checkGuess function to make this assertion pass
//
//console.assert(checkGuess("secretCode", Math.random()) === "you cracked the code!");


// Part 3 (bonus)
//
// Uncomment this assertion, but dont change it.
// Can you figure out why checkGuess passes?

// I think checkGuess passes because checkGuess.value is undefined, (checked this with a console.log) and undefined throws an error for all 3 phrases. But making the line that returns "too low" say else if (guess < secretCode || guess === undefined) doesn't eliminate the error for the line in Part 3.

// Can you change checkGuess to return "too low!" ?
//
// Are there other edge cases where checkGuess will return "you cracked the code!" ?
// I couldn't find any, but I tried these:
console.assert(checkGuess(-1, 100) === "too low!");
console.assert(checkGuess(null, 100) === "too low!");
console.assert(checkGuess(false, 100) === "too low!");
console.assert(checkGuess(true, 100) === "too low!");
// These always causes the test to fail, all 3 phrases:
// console.assert(checkGuess(undefined, 100) === "you cracked the code!");
// console.assert(checkGuess(10000, 100) === "too high!");

console.assert(checkGuess(checkGuess, 1000) === "too low!");

// console.log(checkGuess.value);


/*
I like how you handled the problem of the guesses coming in as strings from the form
and prevented problems with people guessing words or symbols at the same time by
making the input type="number". I didn't know you could do that. I had written the 
checkGuess function with parseFloat(guess) until I got to part 2 and then thought
about people typing words and discovered you can't type letters in the input field.
*/