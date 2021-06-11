//callback
function convertNumbers(arr, callback) {
	setTimeout(function () {
		callback([parseInt(arr[0]), parseInt(arr[1])]);
	}, 1000);
}
convertNumbers(["1", "3"], function (convertResult) {
	console.log(`Converted: ${convertResult}`);
});

// WHERE STUFF IS GOING
function convertNumbers(arr, callback) {
    //function convertNumbers(["1", "3"], function(convertResult)) {  
        setTimeout(function delay() {  
            callback([parseInt(arr[0]), parseInt(arr[1])])
            //function(convertResult)([parseInt(arr[0]), parseInt(arr[1])])
            //function([parseInt(arr[0]), parseInt(arr[1])])
            //function( [parseInt("1"), parseInt("3")] )
            //function([1, 3])
                console.log(convertResult);
                //console.log([1, 3]);
            }
        }, 1000);
    }

//promises
function convertNumbers(arr) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve([parseInt(arr[0]), parseInt(arr[1])]);
		}, 1000);
	});
}
//Focus on the second and fourth sections because the usage of callbacks and promises is more important then the creation of them
convertNumbers(["1", "2"])
	.then(function (convertedNumbers) {
		console.log(`Converted: ${convertedNumbers}`);
	})



// COMPARE 2ND & 4TH SECTIONS

//promise
convertNumbers(["1", "2"])
// function convertNumbers(["1", "2"]) {
// 	   return new Promise(function (resolve) {
//	    	setTimeout(function () {
//              resolve([parseInt(arr[0]), parseInt(arr[1])]);
//          }, 1000);

// resolve parameter takes the convertNumbers callback, which translates to...

        // return new Promise(function(convertNumbers(["1", "2"]))

            // combine Promise with setTimeout function:

            // new Promise = setTimeout(function () {
            //     resolve([parseInt(arr[0]), parseInt(arr[1])]);

                // translates to...
                    // function(convertNumbers(["1", "2"]) ([parseInt(arr[0]), parseInt(arr[1])]);
                    // function( [parseInt("1"), parseInt("2")] )
                    // function([1, 2])      same as function(convertedNumbers)

            // }, .then (meaning promise resolved) = 1000);
        

		console.log(`Converted: ${convertedNumbers}`);
        //console.log(`Converted: ${ [1, 2] }`);
	})

Promise.then(function (convertedNumbers) {
    console.log(`Converted: ${convertedNumbers}`);
    //console.log(`Converted: ${ [1, 2] }`);
})

// callback 
function convertNumbers(arr, callback) {
	setTimeout(function () {
		callback([parseInt(arr[0]), parseInt(arr[1])]);
	}, 1000);
}
convertNumbers(["1", "3"], function (convertResult) {
// convertNumbers(["1", "3"], function (convertResult) {
//     setTimeout(function () {
// 		    callback([parseInt(arr[0]), parseInt(arr[1])]);

            // function(convertResult)([parseInt(arr[0]), parseInt(arr[1])])
            // function([parseInt(arr[0]), parseInt(arr[1])])
            // function( [parseInt("1"), parseInt("3")] )
            // function([1, 3])     same as function(convertResult)

// 	}, 1000);
	console.log(`Converted: ${convertResult}`);
// console.log(`Converted: ${ [1, 3] }`);
});






// EARLIER DRAFT OF PROMISE





	.then(function (convertedNumbers) {
    //convertNumbers(["1", "2"]).then(function (convertedNumbers) {

        // similar to setTimeout where # of seconds to wait is replaced with the promise:
        // setTimeout(function () {
            //convertNumbers(["1", "2"]) (function (convertedNumbers)
        // }, promise resolved )

        // so...

        // setTimeout(function () {
        //     convertNumbers(["1", "2"]) (function (convertedNumbers) {

            // convertNumbers(["1", "2"] [parseInt(arr), parseInt(arr)]) {
            // [parseInt(arr[0]), parseInt(arr[1])]) {
            // [parseInt("1"), parseInt("2")] {
            // ([1, 2])     same as function(convertedNumbers) {

        // }, promise resolved )
        
		console.log(`Converted: ${convertedNumbers}`);
        //console.log(`Converted: ${ [1, 2] }`);
	})

