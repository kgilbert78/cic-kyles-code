let customer = {
    firstName: "Kyle",
    lastName: "Gilbert",
    phoneNumber: "(315) 456-7890",
    address1: "456 Main St.",
    address2: "",
    city: "Syracuse",
    state: "NY",
    zipCode: "13202",
    createdAt: "07/24/21, 1pm"
};

let editedCustomer = {
    firstName: "Kyle",
    lastName: "Gilbert",
    phoneNumber: "(315) 456-7890",
    address1: "123 Center St.",
    address2: "",
    city: "N. Syracuse",
    state: "NY",
    zipCode: "13212"
};

console.log("original customer info:", customer);
Object.assign(customer, editedCustomer);
console.log("updated customer info:", customer);