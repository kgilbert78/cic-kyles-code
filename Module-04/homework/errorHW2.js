// Move line 17 into a try/catch block, so that errors
// thrown by divideTwoNumbers() are caught and logged

function divideTwoNumbers(x, y) {
    if (parseFloat(x) !== x) {
      throw new Error('x is not a number');
    }
    if (parseFloat(y) !== y) {
      throw new Error('y is not a number');
    }
    if (y === 0) {
      throw new Error('divide by zero');
    }
    return x / y;
  }
  
// Handle error messages:

try {
  divideTwoNumbers(6, 0)
} catch(error) {
  console.log(error.message);
}

try {
  divideTwoNumbers('6', 0)
} catch(error) {
  console.log(error.message);
}

try {
  divideTwoNumbers(6, '0')
} catch(error) {
  console.log(error.message);
}

try {
  divideTwoNumbers('6', '0')
} catch(error) {
  console.log(error.message);
}

console.log("I got past the errors!");