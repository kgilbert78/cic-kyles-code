import myFunc1 from "./exportWithImportExport.js";
import { myFunc2 } from "./exportWithImportExport.js";
import camelCaser from "camelcase";
myFunc1();
myFunc2();
console.log(camelCaser("Fix this sentence"));

// try getting one from another folder
import { myFunc3, withParameter, doubleNumber } from "./exportFolder/exportWithImportExport2.js";
myFunc3();
withParameter(5);
console.log(`doubleNumber(10) returns ${doubleNumber(10)} in the export file but the console.log is in this import file.`);

// getting the parameter back out
import { readingGrades } from "./schoolFolder/schoolImportExport.js";
//readingGrades(0);
console.log(`Average Grade ${readingGrades(0).grade} reading grade from export file: ${readingGrades(0).average} `);

// https://www.npmjs.com/package/find-and-replace-anything
import { findAndReplace } from "find-and-replace-anything";
console.log(findAndReplace('a', 'a', 'b'))
//console.log(findAndReplace('change this this and this but not that', 'this', "that"))
//console.log(findAndReplace(['change', 'this', 'this', 'and', 'this', 'but', 'not', 'that'], 'this', "that"))
//console.log(findAndReplace([{name: Student1, grade: 100}, {name: Student2, grade: 100}, {name: Student3, grade: 90},], 100, 95));

// npm init -y to create package.json ( -y means use defaults: don't ask what to name it, install in current folder, etc)
// then type npm install --save packageNameGoesHere (-- save is so it saves to the json file so another user can get everything they need for the file to run by runnng npm install)
// example:
// npm install --save camelcase