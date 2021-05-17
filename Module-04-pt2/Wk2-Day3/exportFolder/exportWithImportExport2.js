export function myFunc3() {
    console.log("myFunc3 just ran");
}

export function withParameter(num) {
    console.log(`My 4th function just ran with ${num} as the parameter`);
}

export function doubleNumber (num) {
    return num * 2;
}

// make bottom of package.json look like this between the last 2 }'s (include addition of comma!):
//   },
//   "type": "module"
// }

// or at the end of the last part of the object:
// },
// "keywords": [],
// "author": "",
// "license": "ISC",
// "description": "", <----- comma here 
// "type": "module"  <----- add this line
// }