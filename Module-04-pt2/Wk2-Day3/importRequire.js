// . = start in folder we are in (.. = look 1 dir up) then slash means
const {myFunc1, myFunc2} = require("./exportRequire.js");
myFunc1();
myFunc2();

// try getting one from another folder

const {myFunc3, myFunc4, withParameter, doubleNumber} = require("./exportFolder/exportRequire2.js");
myFunc3();
myFunc4();
withParameter(5);
console.log(`doubleNumber(10) returns ${doubleNumber(10)} in the export file but the console.log is in this import file.`);

const readingGrades = require("./schoolFolder/schoolRequire.js");
//readingGrades(0);
console.log("Average reading grade for first graders from export file: ", readingGrades(0));

// don't use ./ if you are looking for a package.json (it's only for files you created yourself)
const camelcase = require("camelcase");
console.log(camelcase("Change this sentence"));

// npm init -y to create package.json ( -y means use defaults: don't ask what to name it, install in current folder, etc)
// then type npm install --save packageNameGoesHere (-- save is so it saves to the json file so another user can get everything they need for the file to run by runnng npm install)
// example:
// npm install --save camelcase