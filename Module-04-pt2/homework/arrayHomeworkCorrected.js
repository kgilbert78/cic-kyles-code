const toDoList = [
	{ name: "Import Export homework", status: "done", daysLeftToDo: 1 },
	{ name: "Array homework", status: "in progress", daysLeftToDo: 1 },
	{ name: "Chat App homework", status: "in progress", daysLeftToDo: 1 },
	{ name: "Add to Capstone website", status: "to do", daysLeftToDo: 2 },
	{ name: "Finish Resume", status: "in progress", daysLeftToDo: 3 },
];

const priorityTasks2 = toDoList.filter(
	(task) => task.status !== "done" && task.daysLeftToDo < 2
);

console.log(priorityTasks2);

const priorityTasks2Names = priorityTasks2.map((task) => task.name);

console.log(priorityTasks2Names);

console.log(
	toDoList
		.filter((task) => task.status !== "done" && task.daysLeftToDo < 2)
		.map((task) => task.name)
);

//You were very close with trying to get your name. I ran the filter, console.log it, then use a map to get out the name from the filtered array and then console.log that. Then I get fancy and do the same exact thing, but just by chaining filter & map. 