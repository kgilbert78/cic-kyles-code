export default function myFunc1() {
    console.log("myFunc1 just ran");
}

export function myFunc2() {
    console.log("myFunc2 just ran");
}


// make bottom of package.json look like this between the last 2 }'s (include addition of comma!):
//   },
//   "type": "module"
// }