const toDoList = [
    {name: "Import Export homework", status: "done", daysLeftToDo: 1},
    {name: "Array homework", status: "in progress", daysLeftToDo: 1},
    {name: "Chat App homework", status: "in progress", daysLeftToDo: 1},
    {name: "Add to Capstone website", status: "to do", daysLeftToDo: 2},
    {name: "Finish Resume", status: "in progress", daysLeftToDo: 3}
];

// MODERN LOOP
let taskList = [];
for (const task of toDoList) {
    taskList.push(task.name);
}
console.log(taskList);

// OLD LOOP
// let taskList = [];
// for (let taskIndex = 0; taskIndex < toDoList.length; taskIndex++) {
//     taskList.push(toDoList[taskIndex].name);
// }
// console.log(taskList)

// MODERN LOOP TRANSLATION
let taskList = [];
for (const task of toDoList) {
// for (const toDoList[taskIndex] of toDoList)

// for (const toDoList[taskIndex = 0; taskIndex < toDoList.length; taskIndex++] of toDoList)

    taskList.push(task.name);
    // taskList.push(toDoList[taskIndex].name);
}
console.log(taskList);