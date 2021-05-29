// WITH ONE FUNCTION FOR RETURNING THE STRINGS AS NUMBERS

function convertNumbers(arr, callback) {
    setTimeout(function delay() {
        callback([parseInt(arr[0]), parseInt(arr[1])])
    }, 1000);
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
    }, 1000);
}

// WITH A SECOND FUNCTION FOR ADDING THE NUMBERS

function convertNumbers(arr, callback) {
    setTimeout(function delayParseInt() {
        callback([parseInt(arr[0]), parseInt(arr[1])])
    }, 1000);
}

convertNumbers(["1", "5"], function converter(convertedResult) {
    addNumbers(convertedResult);
});

function addNumbers(arr) {
    setTimeout(function delayAddNumbers() {
        console.log(arr[0] + arr[1]);
    }, 1000)
}

// WHERE STUFF IS GOING 2
function convertNumbers(arr, callback) {
    //function convertNumbers(["1", "5"], converter(convertedResult)) {  
        setTimeout(function delayParseInt() {  
            callback([parseInt(arr[0]), parseInt(arr[1])])
            //converter(convertedResult)([parseInt(arr[0]), parseInt(arr[1])])
            //converter([parseInt(arr[0]), parseInt(arr[1])])
            //converter( [parseInt("1"), parseInt("5")] )
            //converter([1, 5])
            addNumbers(convertedResult) {
                //addNumbers([1, 5]);
                setTimeout(function delayAddNumbers() {
                    console.log(arr[0] + arr[1]);
                    //console.log(1 + 5);
                }, 1000) //closes delayAddNumbers (setTimeout #2)
            } //closes addNumbers
        }, 1000); //closes delayParseInt (setTimeout #1)
    }//closes convertNumbers


// WITH A THIRD FUNCTION FOR AVERAGING THE NUMBERS

function convertNumbers(arr, callback) {
    setTimeout(function delayParseInt() {
        callback([parseInt(arr[0]), parseInt(arr[1])])
    }, 1000);
}

convertNumbers(["1", "5"], function converter(convertedResult) {
    addNumbers(convertedResult, function accessToSum (sum) {
        calculateAverage(sum);
    }
    );
});

function addNumbers(arr, deliverSumResults) {
    setTimeout(function delayAddNumbers() {
        deliverSumResults(arr[0] + arr[1]);
    }, 1000)
}

function calculateAverage(sum) {
    setTimeout(function delaycalculateAverage() {
        console.log(sum / 2);
    }, 1000)
}

// WHERE STUFF IS GOING 3
function convertNumbers(arr, callback) {
    //function convertNumbers(["1", "5"], converter(convertedResult)) {  
        setTimeout(function delayParseInt() {  
            callback([parseInt(arr[0]), parseInt(arr[1])])
            //converter(convertedResult)([parseInt(arr[0]), parseInt(arr[1])])
                //([parseInt(arr[0]), parseInt(arr[1])]) gets passed through convertedResult
            //converter([parseInt(arr[0]), parseInt(arr[1])]) 
            //converter( [parseInt("1"), parseInt("5")] )
            //converter([1, 5])  
                //this is still converter(convertedResult), so convertedResult can be passed to addNumbers below
            addNumbers(convertedResult, deliverSumResults) {
                //<--- 2nd parameter above is like a placeholder for use below once we have the sum to pass into the parameter of the function accessToSum that's being passed to it.
                //addNumbers( [1, 5], accessToSum(sum) ); 
                setTimeout(function delayAddNumbers() {
                    deliverSumResults(arr[0] + arr[1]); //sum stuck here without "accessToSum" function
                    //deliverSumResults(arr[0] + arr[1])  accessToSum(sum)
                        //deliverSumResults = accessToSum, then (arr[0] + arr[1]) gets passed through sum... so here is the first time there's actually something in the parameter "sum", the function accessToSum, and the parameter deliverSumResults!
                    //accessToSum(arr[0] + arr[1]);
                    //accessToSum(addNumbers(1 + 5));
                    //accessToSum(6)); <---- same as accessToSum(sum)
                        //can pass this to calculateAverage because 6 is still connected to the paramater name "sum"
                    calculateAverage(sum) {
                        //calculateAverage(6);
                        setTimeout(function delaycalculateAverage() {
                            console.log(sum / 2);
                            //console.log(6 / 2)
//FINAL RESULT ------>      //console.log(3)
                        }, 1000) //closes delaycalculateAverage (setTimeout #3)
                    } //closes calculateAverage
                }, 1000) //closes delayAddNumbers (setTimeout #2)
            } //closes addNumbers
        }, 1000); //closes delayParseInt (setTimeout #1)
    }//closes convertNumbers


//PART FROM CLASS CODE I'M NOT SURE ABOUT - is the anonymous function with the parameter "average" going to work like the function I called "accessToSum", where the point of it is just to be a placeholder to put the average in? (So I could call it accessToAverage?)
convertNumbers(["1", "5"], function converter(convertedResult) {
    addNumbers(convertedResult, function accessToSum (sum) {
        calculateAverage(sum, function(average) {
            console.log(average)
        });
    }
    );
});










//EARLIEST NOTES
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
