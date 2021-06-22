console.log(
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(1234.5)
);