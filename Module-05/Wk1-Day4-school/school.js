const gradeLevels = [
    {
        name: "9th Grade", 
        teachers: [
            {
                teacher: "Mr. A", 
                students: [
                    {studentNum: 1, grade: 100},
                    {studentNum: 2, grade: 75}
                ]
            },
            {
                teacher: "Mr. B", 
                students: [
                    {studentNum: 3, grade: 50},
                    {studentNum: 4, grade: 65},
                    {studentNum: 5, grade: 85}
                ]
            }
        ]
    }, 
    {name: "10th Grade"}, 
    {name: "11th Grade"},
    {name: "12th Grade"}
];

// console.log(`Student # ${gradeLevels[0].teachers[0].students[0].studentNum}:`, gradeLevels[0].teachers[0].students[0].grade);


// for (gradeLevel = gradeLevels[0]; gradeLevel <= gradeLevels.length; gradeLevel++) {
//     console.log(gradeLevel);
// }

// for (const gradeLevel of gradeLevels) {
//     console.log(gradeLevels);
// };

for (const teacher of gradeLevels[0].teachers) {
    console.log(teacher);
}

// for (const teacher of gradeLevels[0].teachers) {
//     for (const student of )
// }
