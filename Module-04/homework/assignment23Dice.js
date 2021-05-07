const DICE_SYMBOLS = [
  '\u2680',  // ⚀
  '\u2681',  // ⚁
  '\u2682',  // ⚂
  '\u2683',  // ⚃
  '\u2684',  // ⚄
  '\u2685',  // ⚅
];

let bestTotal = 0;
let currentTotal = 0;
let rolledDiceIndices = [];
let rolledDiceSymbols = [];

function rollDice(myRoll) {
  // Reset our total and our "index" array
// before we start a new random roll
currentTotal = 0;
rolledDiceIndices = [];

// Loop five times
for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * 6);
  rolledDiceIndices.push(randomIndex);

  // The first array index is 0, so the "value" of this die
  // is *the index plus one!*
  currentTotal = currentTotal + randomIndex + 1;
}

// If this is our best total, save it!
if (currentTotal > bestTotal) {
  bestTotal = currentTotal;
}

// "Map" the *array* of indices into an *array* of dice symbols
// FYI: The .map() method takes a function as its argument!
rolledDiceSymbols = rolledDiceIndices.map(i => DICE_SYMBOLS[i]);
// Convert our symbol *array* into a *string* with .join()
// FYI: The "\t" in these strings prints a tab/indent character
// FYI: Any string passed to .join() will be interleaved in the output
  return(`${rolledDiceSymbols.join(' ')}`);

}

for (let rollIndex = 0; rollIndex < 3; rollIndex++) {
  console.log('Roll number', (rollIndex + 1).toString(), ':\t', (rollDice(rollIndex)));
// QUESTION 1: Why isn't ${} working in either line below? The text inside {} stays brown like a string instead of blue like a variable.
//  console.log('Roll number ${(rollIndex + 1).toString():\t}', (rollDice(rollIndex)));
//  console.log('Roll number (${rollIndex} + 1).toString():\t', (rollDice(rollIndex)));

// QUESTION 2: I thought it might be useful to have the roll number as a separate variable (below) but I couldn't get it to work. Can you tell me what I did wrong, and also is it useful or maybe not because it's not available outside the loop?
//  let rollNumber = rollIndex => (rollIndex + 1);
//  console.log('Roll number', rollNumber.toString(), ':\t', (rollDice(rollIndex)));
}


  // Now we can print the best total!
  console.log(`Best total:\t${bestTotal}`);