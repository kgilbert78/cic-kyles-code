let toDoList = [];

function addNewTask(event) { //name the function and pass in event as parameter
    // prevent page from refreshing on submit
    event.preventDefault();
    // create formField variable and go to the html doc to the input tag with the id newTaskInput to get the value to store in it.
    const newTaskFormField = document.getElementById("newTaskInput"); 
    toDoList.push(newTaskFormField.value);
    updateHTML();
}

function updateHTML() {
    // create variable and connect it to the where in the html I want it to go by ID (to the <ul>)
    const list = document.getElementById("list"); 
    // create variable for 
    let htmlToUpdate = [];
    for (const listItem of toDoList)
    // display whatever is after the = in the html using the variable linked above
    list.innerHTML = `<li>test</li>`
    console.log(list);
}