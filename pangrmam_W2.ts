//name of the problem: pangram
    //Objective of the problem
    //Objective is to check if a string is a pangram or not
    //That is a string that contains all the letters of the alphabet at least once

    //Algorithm
    //1. Convert the string to lowercase
    //2. Split the string into an array of characters   
    //3. Filter the array to remove any spaces
    //4. Create a new array with unique letters from the filtered array
    //5. Check if the length of the unique letters array is 26
    //6. If it is, return "pangram"
    //7. If it is not, return "not pangram"
//8. Return the result
//9. End

function pangrams(s: string): string {
    // Write your code here
    
    let lowerCaseString = s.toLocaleLowerCase();
    let letters = lowerCaseString.split('').filter(char => char !== ' ')
    const uniqueLetters = [...new Set(letters)];
    let result;
    
    for ( let i = 0; i < uniqueLetters.length; i++) {
        if ( uniqueLetters.length === 26){
            result = "pangram"
        } else{
        result = "not pangram"
    }
    
    return result;
}
}
