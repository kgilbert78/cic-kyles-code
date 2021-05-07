// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

// Without nested arrays
// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//       for (let i = 0; i < arr.length; i++)
//         newArr = arr.filter(i => i !== elem);
//                         // function checkElem(i) { return i !== elem } 
//     // Only change code above this line
//     return newArr;
//   }
//   console.log(filteredArray([3, 2, 3, 1, 6, 3, 3, 13, 26, 19, 3, 9], 3));

  // With nested arrays
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
      for (let i = 0; i < arr.length; i++)
      newArr = arr.forEach(i => i === (arr.filter(i => i !== elem)));
          // need another for loop in line above with j not i... maybe move newArr assignment too.
    // Only change code above this line
    return newArr;
  }

  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));