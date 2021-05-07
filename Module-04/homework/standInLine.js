function nextInLine(arr, item) {
    // Only change code below this line
     arr.push(item);
     var shifted = arr.shift();
     return shifted;
    // Only change code above this line
    
  
}
  
// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// "Run the Tests"
console.log("RUN THE TESTS:");
console.log("Is this a number? ", nextInLine([], 5));
console.log("Is this 1? ", nextInLine([], 1));
console.log("Is this 2? ", nextInLine([2], 1));
console.log("Is this 5? ", nextInLine([5,6,7,8,9], 1));
console.log("Is the 2nd value 10? ", nextInLine(testArr, 10), testArr[4]);