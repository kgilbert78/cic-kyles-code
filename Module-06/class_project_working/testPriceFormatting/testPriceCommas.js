/*
// keeps decimals but doesn't insert comma
const convertToPriceWithCommas = (value) => {
  return `$${value.toFixed(2).toLocaleString()}` 
}
*/

// both work when separated
const addCommas = (value) => {
  return `$${value.toLocaleString()}`
}

const convertToPrice = (value) => {
  return `$${value.toFixed(2)}`
}

// inserts comma only if value is not a round number (.00)
const convertToPriceWithCommas = (value) => {
  value.toFixed(2);
  parseFloat(value);
  // return value;
  return `$${value.toLocaleString()}`
}

console.log("addCommas(2000):", addCommas(2000), typeof addCommas(2000));
console.log("convertToPrice(2000):", convertToPrice(2000), typeof convertToPrice(2000));
console.log("convertToPriceWithCommas(2000):", convertToPriceWithCommas(2000), typeof convertToPriceWithCommas(2000));
console.log("parseFloat(2000.00):", parseFloat("2000.00"));
console.log("parseFloat(2000.01):", parseFloat("2000.01"));
console.log("convertToPriceWithCommas(2000.01):", convertToPriceWithCommas(2000.01), typeof convertToPriceWithCommas(2000.01));
