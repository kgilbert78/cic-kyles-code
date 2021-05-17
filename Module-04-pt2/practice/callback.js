// WITH TIMEOUT AND NAMED FUNCTIONS

function convertNumbers(arr, callback) {
    setTimeout(function delay() {
        callback([parseInt(arr[0]), parseInt(arr[1])])
    }, 100);
}

convertNumbers(["1", "5"], function converter(convertedResult) {
    console.log(convertedResult);
});

// WHERE STUFF IS GOING
function convertNumbers(arr, callback) {
//function convertNumbers(["1", "5"], converter(convertedResult)) {  
    setTimeout(function delay() {  
        callback([parseInt(arr[0]), parseInt(arr[1])])
        //converter(convertedResult)([parseInt(arr[0]), parseInt(arr[1])])
        //converter([parseInt(arr[0]), parseInt(arr[1])])
        //converter( [parseInt("1"), parseInt("5")] )
        //converter([1, 5])
            console.log(convertedResult);
            //console.log([1, 5]);
        }
    }, 100);
}



// TIMEOUT REMOVED TO SIMPLIFY
function convertNumbers(arr, callback) {
    callback([parseInt(arr[0]), parseInt(arr[1])])
}

// WHERE THE STUFF FROM CALLING THE FUNCTION AS BELOW IS GOING
// function convertNumbers(["1", "5"], function(convertResult) {
//     function([parseInt(arr[0]), parseInt(arr[1])]) {
//         console.log(convertResult);
//     }
// });

convertNumbers(["1", "5"], function(convertResult) {
    console.log(convertResult);
});


// ORIGINAL FROM SCREENSHOT

function convertNumbers(arr, callback) {
    setTimeout(function() {
        callback([parseInt(arr[0]), parseInt(arr[1])])
    }, 100);
}

convertNumbers(["1", "5"], function(convertResult) {
    console.log(convertResult);
});
