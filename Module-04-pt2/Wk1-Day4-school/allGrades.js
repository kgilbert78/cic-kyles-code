const gradeLevels = [
    {
        name: "1st Grade", 
        teachers: [
            {
                teacher: "Mrs. A", 
                students: [
                    {studentNum: 1, grade: [
                        {reading: 84, english: 85, math: 95, history: 88, science: 92}
                    ]
                    },
                    {studentNum: 2, grade: [
                        {reading: 96, english: 92, math: 76, history: 82, science: 78}
                    ]}
                ]
            },
            {
                teacher: "Mr. B", 
                students: [
                    {studentNum: 3, grade: [
                        {reading: 77, english: 75, math: 82, history: 74, science: 87}
                    ]},
                    {studentNum: 4, grade: [
                        {reading: 87, english: 89, math: 63, history: 87, science: 75}
                    ]},
                    {studentNum: 5, grade: [
                        {reading: 92, english: 91, math: 96, history: 91, science: 97}
                    ]}
                ]
            }
        ]
    }, 
    {name: "2nd Grade", 
    teachers: [
        {
            teacher: "Mrs. C", 
            students: [
                {studentNum: 1, grade: [
                    {reading: 64, english: 59, math: 78, history: 62, science: 67}
                ]
                },
                {studentNum: 2, grade: [
                    {reading: 98, english: 95, math: 89, history: 85, science: 87}
                ]}
            ]
        },
        {
            teacher: "Mr. D", 
            students: [
                {studentNum: 3, grade: [
                    {reading: 87, english: 88, math: 91, history: 82, science: 92}
                ]},
                {studentNum: 4, grade: [
                    {reading: 82, english: 79, math: 75, history: 72, science: 72}
                ]},
                {studentNum: 5, grade: [
                    {reading: 93, english: 90, math: 77, history: 84, science: 91}
                ]}
            ]
        }
    ]}, 
    {
        name: "3rd Grade", 
        teachers: [
            {
                teacher: "Mrs. E", 
                students: [
                    {studentNum: 1, grade: [
                        {reading: 94, english: 92, math: 89, history: 75, science: 87}
                    ]
                    },
                    {studentNum: 2, grade: [
                        {reading: 87, english: 88, math: 90, history: 85, science: 92}
                    ]}
                ]
            },
            {
                teacher: "Mr. F", 
                students: [
                    {studentNum: 3, grade: [
                        {reading: 57, english: 55, math: 78, history: 62, science: 81}
                    ]},
                    {studentNum: 4, grade: [
                        {reading: 88, english: 86, math: 81, history: 92, science: 83}
                    ]},
                    {studentNum: 5, grade: [
                        {reading: 93, english: 96, math: 97, history: 92, science: 98}
                    ]}
                ]
            }
        ]
    }, 
    {name: "4th Grade", 
    teachers: [
        {
            teacher: "Mrs. G", 
            students: [
                {studentNum: 1, grade: [
                    {reading: 62, english: 65, math: 75, history: 68, science: 77}
                ]
                },
                {studentNum: 2, grade: [
                    {reading: 87, english: 90, math: 88, history: 85, science: 82}
                ]}
            ]
        },
        {
            teacher: "Mr. H", 
            students: [
                {studentNum: 3, grade: [
                    {reading: 98, english: 94, math: 92, history: 93, science: 91}
                ]},
                {studentNum: 4, grade: [
                    {reading: 67, english: 65, math: 79, history: 68, science: 72}
                ]},
                {studentNum: 5, grade: [
                    {reading: 88, english: 86, math: 89, history: 76, science: 85}
                ]}
            ]
        }
    ]}, 
];


function allGrades(gradeLevel) {
    let count = 0;
    let total = 0;

    for (const teacher of gradeLevels[gradeLevel].teachers) {
        // console.log(teacher);
        for (const student of teacher.students) {
            // console.log(student);
            for (const studentGrades of student.grade) {
                for (let [key, value] of Object.entries(studentGrades)) {
                    // console.log(key, value);
                    // console.log(value);
                    count +=1;
                    total += value;
                    return total/count;
                }
            }
        }
    };
}

console.log("Average grades for 1st grade for all subjects: ", allGrades(0));

let gradeLevelCount = 0;
let gradeLevelTotal = 0;
for (let gradeLevel = 0; gradeLevel < gradeLevels.length; gradeLevel++) {
    console.log(`Average of all ${gradeLevels[gradeLevel].name} students' grades in all subjects:`, allGrades(gradeLevel));
    gradeLevelCount++;
    gradeLevelTotal += allGrades(gradeLevel);
}
console.log("Average grade for students in all grades: ", gradeLevelTotal / gradeLevelCount);

// let count = 0;
// let total = 0;

// for (const teacher of gradeLevels[0].teachers) {
//     // console.log(teacher);
//     for (const student of teacher.students) {
//         // console.log(student);
//         for (const studentGrades of student.grade) {
//             for (let [key, value] of Object.entries(studentGrades)) {
//                 // console.log(key, value);
//                 // console.log(value);
//                 count +=1;
//                 total += value;
//                 console.log(total/count);
//             }
//         }
//     }
// };

// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object

// For-of with Object.keys()
// const p = {
//     "p1": "value1",
//     "p2": "value2",
//     "p3": "value3"
// };

// for (let [key, value] of Object.entries(p)) {
//   console.log(`${key}: ${value}`);
// }

// WORKS!
// for (let [key, value] of Object.entries(gradeLevels[0].teachers[0].students[0].grade[0])) {
//     console.log(key, value)
// }