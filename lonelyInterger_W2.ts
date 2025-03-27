//Name of the problem: Lonely Integer

//Objective of the problem
     //Objective is to find the integer that appears only once in an array of integers
     
     //Algorithm
         //1. Declare a variable to hold the count of the integer
         //2. Iterate over the array
         //3. Iterate over the array again starting from the second index
         //4. Check if the integer is equal to the integer in the array
         //5. If it is, increment the count
         //6. If the count is 1, return the integer   
         //7. If the count is not 1, return -1


function lonelyinteger(a: number[]): number {
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                count++;
            }
        }
        if (count === 1) {
            return a[i];
        }
    }
    return -1; 
}