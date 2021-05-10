for (let i = 1; i <= 5; i++) {
    for (let j = i+1; j <= 5; j++) {
        console.log(i, j);
    }
}

let students = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5"];

for (let i = 0; i < students.length; i++) {
    for (let j = i+1; j < students.length; j++) {
        console.log(students[i], students[j]);
    }
}