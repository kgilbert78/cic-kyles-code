// I don't understand why the version below doesn't work. The tests it failed were:
//   quickCheck(["onions", "squash", "shallots"], "onions") should return true
//   quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
// It seems like it should pass both of these? 
// Index 0 & index 3 are both >=0 and within the array's length.

function quickCheck(arr, elem) {
    // Only change code below this line
    return arr.indexOf(elem) >= 0 && arr.indexOf(elem) >= arr.length;
    // Only change code above this line
  }
  
  console.log(quickCheck(["onions", "squash", "shallots"], "onions"));

// In the code below why doesn't it recognize it's own parameter arr if return doesn't come first?
// It seems like if it did the code below would work. (My first attempt at solving it.)

function quickCheck(arr, elem) {
    // Only change code below this line
    if arr.indexOf(elem) {
      return true;
    } else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// from https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof
