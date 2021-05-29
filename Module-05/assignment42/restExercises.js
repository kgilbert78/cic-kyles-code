// // FIRST API

// // 1. create student
// let promise = axios.post(
//     'http://module5.ml/students/', 
//     '{"name": "Kyle Gilbert", "currentModule": 5, "favoriteColor": "null"}',
//     {headers: 
//         {"Content-Type": "application/json", 
//         "Accept": "application/json"}
//     }
// );
// promise.then(function(response) {
//     console.log(response.status);
//     console.log(response.data);
// });

// // response 1
// 201
// {name: "Kyle Gilbert", currentModule: 5, favoriteColor: "null", id: "c8253681-71b5-4589-b9c6-b73146ef4fd6"}

// // 2. create assignment
// let promise = axios.post(
//     'http://module5.ml/students/c8253681-71b5-4589-b9c6-b73146ef4fd6/assignments',
//     '{"name": "REST exercises", "completed": "false"}',
//     {headers:
//         {"Content-Type": "application/json",
//         "Accept": "application/json"}
//     }
// );
// promise.then(function(response){
//     console.log(response.status);
//     console.log(response.data);
// });

// // response 2
// 201
// {name: "REST exercises", completed: "false", id: "85022125-7d03-4144-8ead-02d161a2d114", studentId: "c8253681-71b5-4589-b9c6-b73146ef4fd6"}

// // 3. update favoriteColor
// let promise = axios.put(
//     'http://module5.ml/students/c8253681-71b5-4589-b9c6-b73146ef4fd6',
//     '{"name": "Kyle Gilbert", "currentModule": 5, "favoriteColor": "purple"}',
//     {headers: 
//         {"Content-Type": "application/json", 
//         "Accept": "application/json"}
//     }
// );
// promise.then(function(response){
//     console.log(response.status);
//     console.log(response.data);
// });

// // response 3
// 200
// {name: "Kyle Gilbert", currentModule: 5, favoriteColor: "purple", id: "c8253681-71b5-4589-b9c6-b73146ef4fd6"}

// // 4. update assignment
// let promise = axios.put(
//     'http://module5.ml/students/c8253681-71b5-4589-b9c6-b73146ef4fd6/assignments/85022125-7d03-4144-8ead-02d161a2d114',
//     '{"name": "REST exercises", "completed": "true"}',
//     {headers:
//         {"Content-Type": "application/json",
//         "Accept": "application/json"}
//     }
// );
// promise.then(function(response){
//     console.log(response.status);
//     console.log(response.data);
// });

// // response 4
// 200
// {name: "REST exercises", completed: "true", id: "85022125-7d03-4144-8ead-02d161a2d114", studentId: "c8253681-71b5-4589-b9c6-b73146ef4fd6"}



// // SECOND API

// // Getting Started
// let promise = axios.get('http://swapi.dev/api/planets/1');
// promise.then(function(response){
//     console.log(response.data);
// });

// // getting started response
// HTTP 200 OK
// Content-Type: application/json
// Vary: Accept
// Allow: GET, HEAD, OPTIONS

// {
//     "name": "Tatooine", 
//     "rotation_period": "23", 
//     "orbital_period": "304", 
//     "diameter": "10465", 
//     "climate": "arid", 
//     "gravity": "1 standard", 
//     "terrain": "desert", 
//     "surface_water": "1", 
//     "population": "200000", 
//     "residents": [
//         "http://swapi.dev/api/people/1/", 
//         "http://swapi.dev/api/people/2/", 
//         "http://swapi.dev/api/people/4/", 
//         "http://swapi.dev/api/people/6/", 
//         "http://swapi.dev/api/people/7/", 
//         "http://swapi.dev/api/people/8/", 
//         "http://swapi.dev/api/people/9/", 
//         "http://swapi.dev/api/people/11/", 
//         "http://swapi.dev/api/people/43/", 
//         "http://swapi.dev/api/people/62/"
//     ], 
//     "films": [
//         "http://swapi.dev/api/films/1/", 
//         "http://swapi.dev/api/films/3/", 
//         "http://swapi.dev/api/films/4/", 
//         "http://swapi.dev/api/films/5/", 
//         "http://swapi.dev/api/films/6/"
//     ], 
//     "created": "2014-12-09T13:50:49.641000Z", 
//     "edited": "2014-12-20T20:58:18.411000Z", 
//     "url": "http://swapi.dev/api/planets/1/"
// }




// // 1.
// let promise = axios.get('http://swapi.dev/api/people/', {
//     headers: {
//         "Accept": "application/json"
// }});
// promise.then(function(response){
//     console.log(response.data);
// });



// Get each resident from above
let promise = axios.get('http://swapi.dev/api/planets/1');
promise.then(function(response){
    console.log(response.data.residents);
});

// 1 promise from /people/ all the way to name
let promise = axios.get('http://swapi.dev/api/people/1/');
promise.then(function(response){
    console.log(response.data.name);
});


// nest promises to get the name of each resident
let promise = axios.get('http://swapi.dev/api/planets/1');
promise.then(function(response){
    residentURLs = response.data.residents;
    console.log(residentURLs);
    for (let URLIndex = 0; URLIndex < residentURLs; URLIndex++) {
        let promise2 = axios.get(residentURLs);
        promise2.then(function(response){
            console.log(response.data.name);
        });
    };
});




// // 2. & 3.
// let promise = axios.get('https://swapi.dev/api/people/?search=Luke', {
//     headers: {
//         "Accept": "application/json"
// }});
// promise.then(function(response){
//     console.log(response.data);
// });

// // response 2 & 3
// {count: 1, next: null, previous: null, results: Array(1)}
// count: 1
// next: null
// previous: null
// results: Array(1)
// 0:
// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "http://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: []
// starships: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
// url: "http://swapi.dev/api/people/1/"
// vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object

// // Optional Next Steps 1.
// // response 1 (Optional Next Steps)
// // Optional Next Steps 2.
// // response 2 (Optional Next Steps)



// THIRD API
