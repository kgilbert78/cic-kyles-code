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