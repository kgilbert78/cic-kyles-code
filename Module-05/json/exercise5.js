let jsonArray = [7529, 5824, 78, 627, 598, 3151, 3857, 12, 3, 52614, 395, 817, 36, 4781, 39, 75, 42, 3856, 7143, 1085, 26];

// let total = 0;
// for (let numberIndex = 0; numberIndex < jsonArray.length; numberIndex++) {
//     total += jsonArray[numberIndex];
//     console.log(total);
// };

function totalArray(arr) {
    let total = 0;
    for (let numberIndex = 0; numberIndex < arr.length; numberIndex++) {
        total += arr[numberIndex];
    };
    return total;
};

console.log(totalArray(jsonArray));

// From Console, returns the array
//let promise = axios.get('http://module5.ml/number-list'); promise.then(function(response){console.log(response.data);});

// For pasting in console instead of console.log(response.data);
//function totalArray(response) {let total = 0; for (let numberIndex = 0; numberIndex < response.length; numberIndex++) {total += response[numberIndex]; }; return total;}; console.log(totalArray(response));


//works in the browser console
let promise = axios.get('http://module5.ml/number-list'); 
promise.then(function(response) {
    function totalArray(response) {
        let total = 0; 
        for (let numberIndex = 0; numberIndex < response.data.length; numberIndex++) {
            total += response.data[numberIndex]; 
        }; 
        return total;
    }; 
    console.log(totalArray(response));
});
