const toDoList = [
    {name: "Import Export homework", status: "done", daysLeftToDo: 1},
    {name: "Array homework", status: "in progress", daysLeftToDo: 1},
    {name: "Chat App homework", status: "in progress", daysLeftToDo: 1},
    {name: "Add to Capstone website", status: "to do", daysLeftToDo: 2},
    {name: "Finish Resume", status: "in progress", daysLeftToDo: 3}
];

// MODERN LOOP
// let taskList = [];
// for (const task of toDoList) {
//     taskList.push(task.name);
// }
// console.log(taskList);

// OLD LOOP
// let taskList = [];
// for (let taskIndex = 0; taskIndex < toDoList.length; taskIndex++) {
//     taskList.push(toDoList[taskIndex].name);
// }
// console.log(taskList)

// MAP FUNCTION INSTEAD OF LOOP
// const taskList = toDoList.map(function getTaskNames(task) {
//     return task.name;
// });

const taskList = toDoList.map((task) => task.name);
console.log(taskList);
// this  => replaces the words function AND return AND {}. Goes between the parameter and the returned value(s).


// LOOP TO FILTER 
// let priorityTasks = [];
// for (const task of toDoList) {
//     if (task.status !== "done" && task.daysLeftToDo < 2) {
//         priorityTasks.push(task.name);
//     }
// }
// console.log(priorityTasks);

// FILTER FUNCTION
// const priorityTasks = toDoList.filter(function getPriorityTasks(task) {
//     if (task.status !== "done" && task.daysLeftToDo < 2) {
//         return task.name;
//     } 
// });
// console.log(priorityTasks);

// FILTER ARROW FUNCTION
const priorityTasks = toDoList.filter((task) => (task.status !== "done" && task.daysLeftToDo < 2));
console.log(priorityTasks);

// UNSUCCESSFUL ATTEMPTS TO FILTER JUST THE OBJECT KEY VALUES FOR NAME - I think I need to pass in the taskIndex but I'm not sure how to do that and what to do with it inside the function.

// const priorityTasks2 = toDoList.filter((task) => (task.status !== "done" && task.daysLeftToDo < 2).name);
// console.log(priorityTasks2);

// const priorityTasks2 = toDoList.filter((task, taskIndex) => ((task.status !== "done" && task.daysLeftToDo < 2)[taskIndex].name));
// console.log(priorityTasks2);



// BIG LONG ATTEMPT
// function getTaskNames() { 
// let taskName = [];
//     for (let taskIndex = 0; taskIndex < toDoList.length; taskIndex++) {
//         taskList.push(toDoList[taskIndex].name);
//         return taskName;
//     };
// };
// function getTaskIndex() { 
//         for (let taskIndex = 0; taskIndex < toDoList.length; taskIndex++) {
//             return taskIndex;
//         };
//     };

// let taskNames = getTaskNames(toDoList);
// let taskIndices = getTaskIndex(toDoList);

// function getPriorityTasks(task) {
//     if (task.status !== "done" && task.daysLeftToDo < 2) {
//         return task.name;
//     } 
// }
// const priorityTasks3 = toDoList.filter(getPriorityTasks(taskNames, taskIndices));
// console.log(priorityTasks3);
