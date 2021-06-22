const amt = 1234.5;
// console.log(new Intl.NumberFormat().format(amt)); //1,234.56
// console.log(new Intl.NumberFormat().format(1234)); //1,234
const customCurrencyFormatter = (num) => {
	let string = `$${new Intl.NumberFormat().format(num)}`;
	if (!string.includes(".")) {
		string += ".00";
	} else if (string[string.length - 2] === ".") {
		string += "0";
	}
	return string;
};
console.log(customCurrencyFormatter(1234.5)); //$1,234.00