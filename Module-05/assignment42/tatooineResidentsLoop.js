// Get each Tatooine resident's URL from planet 1 endpoint
let promise = axios.get('http://swapi.dev/api/planets/1');
promise.then(function(response){
    console.log(response.data.residents);
});
// returns:
//(10) ["http://swapi.dev/api/people/1/", "http://swapi.dev/api/people/2/", "http://swapi.dev/api/people/4/", "http://swapi.dev/api/people/6/", "http://swapi.dev/api/people/7/", "http://swapi.dev/api/people/8/", "http://swapi.dev/api/people/9/", "http://swapi.dev/api/people/11/", "http://swapi.dev/api/people/43/", "http://swapi.dev/api/people/62/"]

// 1 promise from people/#/ endpoint so it displays the name
let promise = axios.get('http://swapi.dev/api/people/1/');
promise.then(function(response){
    console.log(response.data.name);
});
// returns:
// Luke Skywalker

// nest promises to get the name of each resident
let promise = axios.get('http://swapi.dev/api/planets/1');
promise.then(function(response){
    residentURLs = response.data.residents;
    console.log(residentURLs); // this part works
    for (let URLIndex = 0; URLIndex < residentURLs; URLIndex++) {
        let promise2 = axios.get(residentURLs);
        promise2.then(function(response){
            console.log(response.data.name);
        });
    };
});