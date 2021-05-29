// create a variable for all display results
//let displayResults = [];


//function updateHTML() {
    // connect to HTML for each exercise 
    // create empty variable for storing data fetched from server
    // assign results returned from function to that variable
    // assign that variable to innerHTML of p tag id
//}


function exercise1(event) {
    event.preventDefault();
    let exercise1Promise = axios.get('http://module5.ml/apples');
    exercise1Promise.then(function(response){
        console.log(response.status);
        console.log(response.data);
        document.getElementById("exercise1Output").innerHTML = response.data;
        return response.data;
    });
}

function displayExercise1(event) { 
    // create variable and connect it to where I want it to display in html
    const fruitDisplay = document.getElementById("exercise1Output2");
    // create empty variable for storing data fetched from server
    // run exercise1 function
    // assign results returned from function to that variable
    let exercise1Results = exercise1(event);
    console.log(exercise1Results);
    // assign that variable to innerHTML of p tag id
    fruitDisplay.innerHTML = exercise1Results;
}

function exercise2(event) {
    event.preventDefault();
    let phraseEntered = document.getElementById("exercise2Input");
    console.log(phraseEntered); 
    // console.log(phraseEntered.value);
    console.log(document.getElementById("exercise2Input"));
    let exercise2Promise = axios.post('http://module5.ml/text-processing/frequencies', phraseEntered);
    console.log(exercise2Promise)
    exercise2Promise.then(function(response){
        console.log(response.status);
        console.log(response.data);
        document.getElementById("exercise2Output").innerHTML = response.data;
        return response.data;
    });
}



