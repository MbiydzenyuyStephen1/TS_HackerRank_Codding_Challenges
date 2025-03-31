//Name of the problem: Grading Students
//Objective of the problem
    //Objective is to round the grades of students to the nearest multiple of 5 
    // if the difference between the grade and the next multiple of 5 is less than 3
    // and the grade is greater than 38
    //Algorithm
    //1. Declare a variable to hold the rounded grades
    //2. Iterate over the grades array
    //3. Check if the grade is less than 38
    //4. If it is, push the grade to the rounded grades array
    //5. If it is not, check if the difference between the grade and the next multiple of 5 is less than 3
    //6. If it is, push the next multiple of 5 to the rounded grades array
    //7. If it is not, push the grade to the rounded grades array
    //8. Return the rounded grades array

function gradingStudents(grades: number[]): number[] {
    // Write your code here
let roundedGrades: number[] = [];

for (let i = 0; i < grades.length; i++) {
    let grade = grades[i]
    if ( grades[i] < 38 ) {
        roundedGrades.push(grades[i])
    }else {
        let nextMultipleOf5 = grade;
        
        while ( nextMultipleOf5 % 5 !== 0 ) {
            nextMultipleOf5++;
        }
        
        if( nextMultipleOf5 - grade < 3 ){
            roundedGrades.push(nextMultipleOf5)
        }else {
            roundedGrades.push(grade)
        }
    }
    
}

return roundedGrades;
}
