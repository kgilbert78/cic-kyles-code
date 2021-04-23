let year = 365;
const day = 24;
const hour = 60;
const minute = 60;
let secondsPerYear;

//Need code for user prompt to enter year and for converting what user entered from string to number. For now it works by changing the year on line 8 and running it again.
let myYear = 2020;
if (myYear % 4 === 0) {
    year = 366;
    secondsPerYear = year * day * hour * minute;
} else {
    secondsPerYear = year * day * hour * minute;
}
console.log(secondsPerYear);