let toDoList = [];

function addNewTask(event) { 
    event.preventDefault();
    const newTaskFormField = document.getElementById("newTaskInput"); 
    if (newTaskFormField.value === "") {
        newTaskFormField.value = window.prompt("Enter a task name here:");
    }
    toDoList.push({ name: newTaskFormField.value, done: false });
    newTaskFormField.value = ""; 
    updateHTML();
}

function editButtonPressed(toDoTaskIndex) {
    // If they hit cancel in this prompt window it changes the task name to null! Not sure how to handle that.
    const newName = window.prompt("Enter the new name of the task here:"); 
    if (newName === "") {
        newName = window.prompt("Enter a task name here:");
    }
    toDoList[toDoTaskIndex].name = newName;
    updateHTML();
}

function deleteButtonPressed(toDoTaskIndex) {
    // added reference to the name of the task the person is deleting. First tried this by passing in (toDoTaskIndex, toDoTask) and referencing toDoTask in the brackets but got error "Uncaught SyntaxError: Unexpected Identifier" referencing line 1 of my html code ???
    if (window.confirm(`Are you sure you want to delete ${toDoList[toDoTaskIndex].name}?`)) {
        toDoList.splice(toDoTaskIndex, 1);
        updateHTML();
    }
}

function doneButtonPressed(toDoTaskIndex) {
    toDoList[toDoTaskIndex].done = !toDoList[toDoTaskIndex].done;
    const doneTask = toDoList[toDoTaskIndex];
    toDoList.splice(toDoTaskIndex, 1);
    toDoList.push(doneTask);
    // tried an if statement here to unshift the task if done = false so tasks changed from done to undone would go back to the top of the list, but toDoTaskIndex is now set to the index of the task deleted, as demonstrated by the console log below. Had trouble thinking of a way to overcome this.
    console.log(toDoList[toDoTaskIndex]);
    updateHTML();
}

function updateHTML() {
    const list = document.getElementById("list"); 
    let htmlToUpdate = "";
    // I think .entries is working like .map and putting toDoList's index on the first array item and the name of the item at that index on the second array item?
    for (const [toDoTaskIndex, toDoTask] of toDoList.entries()) {
        htmlToUpdate +=
        `<li style="text-decoration: ${toDoTask.done === true ? "line-through" : "none"}">
        ${toDoTask.name} 
        <button onclick="editButtonPressed(${toDoTaskIndex})">Edit</button>
        <button onclick="deleteButtonPressed(${toDoTaskIndex})">Delete</button>
        <button onclick="doneButtonPressed(${toDoTaskIndex})">Done</button>
        </li>`;
    }
        // Alternate form of the same loop (WORKS IF UNCOMMENTED!)
        // for (let toDoTaskIndex = 0; toDoTaskIndex < toDoList.length; toDoTaskIndex++) {
        //     htmlToUpdate += 
        //     `<li style="text-decoration: ${toDoList[toDoTaskIndex].done === true ? "line-through" : "none"}">
        //     ${toDoList[toDoTaskIndex].name} 
        //     <button onclick="editButtonPressed(${toDoTaskIndex})">Edit</button>
        //     <button onclick="deleteButtonPressed(${toDoTaskIndex})">Delete</button>
        //     <button onclick="doneButtonPressed(${toDoTaskIndex})">Done</button>        
        //     </li>`;
        // }
        
    list.innerHTML = htmlToUpdate;
}

function resetToDos(event) {
    toDoList = [];
    const list = document.getElementById("list"); 
    list.innerHTML = "<li>Nothing to do yet! Enter a task in the field above.</li>";
}

