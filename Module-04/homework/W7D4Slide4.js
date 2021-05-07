function multiplierFactory(factor) {
    // This function value that is returned "remembers"
    // The original value of the factor argument
    return number => number * factor;
   }
   
   let multiplyByTwo = multiplierFactory(2);
   console.log(multiplyByTwo(5));