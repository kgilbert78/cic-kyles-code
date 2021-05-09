let toDoList = [];

// PRIOR CODE FOR ARRAYS
// let doneItems = [];

function addNewTask(event) { //name the function and pass in event as parameter
    // prevent page from refreshing on submit
    event.preventDefault();
    // create newTaskFormField variable and go to the html doc to the input tag with the id newTaskInput to get the value to store in it.
    const newTaskFormField = document.getElementById("newTaskInput"); 
    // append the values in the object-variable to the end of the toDoList using .push()
    toDoList.push({ name: newTaskFormField.value, done: false });
    newTaskFormField.value = ""; // reset value to empty string so entered task disappears from html input field onsubmit (ready for next input)
    updateHTML();
}

// parameter for the index of the array item to edit, supplied by edit button's onclick in updateHTML()
function editButtonPressed(toDoTaskIndex) {
    // pop up window in browser, assign input to a new variable newName
    const newName = window.prompt("Enter the new name of the task here:"); 
    // assigns the newName variable to the toDoList at the index supplied by edit button
    toDoList[toDoTaskIndex].name = newName;
    // newName is there as the value of that list item when the html updates
    updateHTML();
}

function deleteButtonPressed(toDoTaskIndex) {
    // wrap prompt in if statement so it will only delete if they confirm (hit cancel & the code dosesn't run)
    // added reference to the name of the task the person is deleting. First tried this by passing in (toDoTaskIndex, toDoTask) and referencing toDoTask in the brackets but got error "Uncaught SyntaxError: Unexpected Identifier" referencing line 1 of my html code - why?
    if (window.confirm(`Are you sure you want to delete ${toDoList[toDoTaskIndex].name}?`)) {
        // remove item at index indicated by delete button onclick using splice, specifiying to remove 1 item
        toDoList.splice(toDoTaskIndex, 1);
        updateHTML();
    }
}

function doneButtonPressed(toDoTaskIndex) {
    // toggle setting for css text style in updateHTML function by looking at value of done key and flipping it to whatever it's not (boolean: true/false)
    toDoList[toDoTaskIndex].done = !toDoList[toDoTaskIndex].done;
    // // longer way to toggle it:
    // if (toDoList[toDoTaskIndex].done === true) {
	// 	toDoList[toDoTaskIndex].done = false;
	// } else {
	// 	toDoList[toDoTaskIndex].done = true;
	// }
    
    // assign the item at the index of the done button that was clicked to a new variable doneTask
    const doneTask = toDoList[toDoTaskIndex];
    // remove the item at the index of the done button that was clicked from the toDoList after saving it in the variable above. 1 for the number of items to remove.
    toDoList.splice(toDoTaskIndex, 1);
    // add the item stored in the variable back to the toDoList array at the END
    toDoList.push(doneTask);
    updateHTML();
}
    // PRIOR CODE FOR ARRAYS - goes inside doneButtonPressed function
    // // assign the item at the index of the done button that was clicked to a new variable doneTask
    // const doneTask = toDoList[toDoTaskIndex];
    // // remove the item at the index of the done button that was clicked from the toDoList after saving it in the variable above. 1 for the number of items to remove.
    // toDoList.splice(toDoTaskIndex, 1);
    // // add the item stored in the variable to the array doneItems (created at top of page)
    // doneItems.push(doneTask);
    // console.log(doneItems);
    // updateHTML();


function updateHTML() {
    // create variable and connect it to where in the html I want it to go by ID (to the <ul>)
    const list = document.getElementById("list"); 
    // create empty variable for storing user-entered To Do
    let htmlToUpdate = "";
    // loop to divide To Do list into list items and add them to the variable with formatting for an html list. const ok because it creates a new one each time it loops. I think .entries is working like .map and putting toDoList's index on the first array item and the name of the item at that index on the second array item?
    for (const [toDoTaskIndex, toDoTask] of toDoList.entries()) {
        htmlToUpdate += // += so it's not overwriting
        // pass the index to the function so I can use it inside the function to tell it which item of the toDoList array to assign the new name to, or delete, or mark done. use key "name" to identify the value within the object. 
        // set css text style when doneButtonPressed function runs: if toDoTask is done set text decoration to strikethrough text, else set text decoration to none.
        `<li style="text-decoration: ${toDoTask.done === true ? "line-through" : "none"}">
        ${toDoTask.name} 
        <button onclick="editButtonPressed(${toDoTaskIndex})">Edit</button>
        <button onclick="deleteButtonPressed(${toDoTaskIndex})">Delete</button>
        <button onclick="doneButtonPressed(${toDoTaskIndex})">Done</button>
        </li>`;
    }
        // Alternate form of the same loop (WORKS IF UNCOMMENTED!)      toDoTaskIndex+=1
        // for (let toDoTaskIndex = 0; toDoTaskIndex < toDoList.length; toDoTaskIndex++) {
        //     htmlToUpdate += 
        //     `<li style="text-decoration: ${toDoList[toDoTaskIndex].done === true ? "line-through" : "none"}">
        //     ${toDoList[toDoTaskIndex].name} 
        //     <button onclick="editButtonPressed(${toDoTaskIndex})">Edit</button>
        //     <button onclick="deleteButtonPressed(${toDoTaskIndex})">Delete</button>
        //     <button onclick="doneButtonPressed(${toDoTaskIndex})">Done</button>        
        //     </li>`;
        // }
        //
        // Map method in place of loop (better for when you want an array as the result)
        // toDoList.map((toDoTask) => {htmlToUpdate += `<li>${toDoTask}</li>`});
    
        // for (const [toDoTaskIndex, doneItem] of doneItems.entries()) {
        //     htmlToUpdate += // += so it's not overwriting
        //     // pass the index to the function so I can use it inside the function to tell it which item of the toDoList array to assign the new name to, or delete, or mark done.
        //     `<li style="text-decoration: line-through">
        //     ${doneItem} 
        //     <button onclick="editButtonPressed(${toDoTaskIndex})">Edit</button>
        //     <button onclick="deleteButtonPressed(${toDoTaskIndex})">Delete</button>
        //     </li>`;
        // }
            // Alternate form of the same loop (WORKS IF UNCOMMENTED!)      toDoTaskIndex+=1
            // for (let toDoTaskIndex = 0; toDoTaskIndex < doneItems.length; toDoTaskIndex++) {
            //     htmlToUpdate += 
            //     `<li style="text-decoration: line-through">
            //     ${doneItems[toDoTaskIndex]} 
            //     <button onclick="editButtonPressed(${toDoTaskIndex})">Edit</button>
            //     <button onclick="deleteButtonPressed(${toDoTaskIndex})">Delete</button>       
            //     </li>`;
            // }
    
    // Display in the html (linked with list variable to list ID) using the variable built by the for loop
    list.innerHTML = htmlToUpdate;
}

// function linked to reset button in html with onclick
function resetToDos(event) {
    toDoList = []; // set the array back to empty
    const list = document.getElementById("list"); 
    list.innerHTML = "<li>Nothing to do yet! Enter a task in the field above.</li>";
    // took out calling updateHTML because it sets the value of the HTML list back to an empty variable. replaced it with the code above that also updates HTML but sets the value back to the text I have in the html for the beginning when the page loads.
    // updateHTML();
}

