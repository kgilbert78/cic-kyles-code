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

console.log(`Student # ${gradeLevels[3].teachers[0].students[0].studentNum}:`, `Reading grade ${gradeLevels[3].teachers[0].students[0].grade[0].reading}`);

let count = 0;
let total = 0;

for (const teacher of gradeLevels[0].teachers) {
    // console.log(teacher);
    for (const student of teacher.students) {
        // console.log(student);
        for (const studentGrades of student.grade) {
            // these 2 console logs work
            // console.log(studentGrades);
            // console.log(studentGrades.reading);
            count += 1;
            total += studentGrades.reading;

            // this console log does not work
            // for (const readingGrade of studentGrades.reading) {
            //     console.log(readingGrade);
            // }
        }
    }
};

// This should be 87.2 and it is.
console.log("Average 1st grade reading grade from loop: ", total / count);

// Tried to make it into a function so I could pass in the grade level and get the average reading score from any grade. The result doesn't come out right when I call the function for 1st grade on line 171 though.
function readingGrades(gradeLevel) {
    let count = 0;
    let total = 0;

    for (const teacher of gradeLevels[gradeLevel].teachers) {
        // console.log(teacher);
        for (const student of teacher.students) {
            // console.log(student);
            for (const studentGrades of student.grade) {
                // these 2 console logs work
                // console.log(studentGrades);
                // console.log(studentGrades.reading);
                count += 1;
                return total += studentGrades.reading;
            }
        }
    };
}
// Average is 87.2 but it comes out to 84 here.
console.log("Average 1st grade reading grade from function: ", readingGrades(0));

// average of all grade levels' reading grades should be 84.05
count = 0;
total = 0;
for (let readingGradeIndex = 0; readingGradeIndex < gradeLevels.length; readingGradeIndex++) {
   readingGradeTotal = readingGrades(readingGradeIndex);
   count += 1;
   total += readingGradeTotal;
}
// Average is 84.05 but it comes out to 62 here.
console.log("Average of all students' reading grades from function: ", readingGradeTotal);

// I got stuck figuring out how to pass each of the indices in the loop below through this function. Probably not the best way to do it but I actually got the code inside the function to work with 1 student's grade if I put all the correct indexes in manually, so I was trying to work with it.
// function readingGrades2(gradeLevelIndex, teacherIndex, studentIndex) {
//     gradeLevels[gradeLevelIndex].teachers[teacherIndex].students[studentIndex].grade[0].reading;
// }
// count = 0;
// total = 0;
// for (let gradeLevelIndex = 0; gradeLevelIndex < gradeLevels.length; gradeLevelIndex++) {

//     for (let teacherIndex = 0; teacherIndex < teachers.length; teacherIndex++) {
//         for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
            
//         }
//     }
// }

    