// Move line 17 into a try/catch block, so that errors
// thrown by divideTwoNumbers() are caught and logged

function divideTwoNumbers(x, y) {
  if (parseFloat(x) !== x) {
    try {
      throw new Error('x is not a number');
    } catch(error) {
      console.log(error.message);
    }
  }
  if (parseFloat(y) !== y) {
    try {
      throw new Error('y is not a number');
    } catch(error) {
      console.log(error.message);
  }
}
  if (y === 0) {
    try {
      throw new Error('divide by zero');
    } catch(error) {
        console.log(error.message);
    }
    
  }
  return x / y;
}

console.log(divideTwoNumbers(6, 0));
console.log(divideTwoNumbers(6, '0'));
console.log(divideTwoNumbers('6', 0));
console.log(divideTwoNumbers('6', '0'));
console.log("I got past the errors!");
