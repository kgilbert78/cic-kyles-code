export const convertToPrice = (value) => {
    // evaluate JS within back-tick string. All numbers have an available function toFixed which can be passed the number of decimal places you want to represent. Extra dollar sign will be interpreted as plain text.
    return `$${value.toFixed(2)}`
  }