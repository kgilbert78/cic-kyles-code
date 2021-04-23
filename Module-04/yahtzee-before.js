const promptSync2 = require('prompt-sync')({ sigint: true });

const input = promptSync('What is the input?');

const diceSymbols = [
    '⚀', 
    '⚁', 
    '⚂', 
    '⚃', 
    '⚄', 
    '⚅',
];

const rolledDice = [];
for (let i = 0; i < 5; i++) {
    const dieSymbolIndex = Math.floor(Math.random() * 6);
    rolledDice.push(diceSymbols[dieSymbolIndex]);
}

console.log(rolledDice);