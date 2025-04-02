//Name of the problem: Counting Sort 1
//Objective of the problem
    //Objective is to count the number of occurrences 
    // of each value in an array

    //Algorithm
        //1. Declare a variable to hold the result array, set its lenght to 100
        //and fill it with 0
        //2. Iterate over the array
        //3. Increment the value at the index of the result array   
        //4. Return the result array

function countingSort(arr: number[]): number[] {
    // Write your code here
let result = new Array(100).fill(0);
 
 for( let i = 0; i < arr.length; i++ ){
    result[arr[i]]++
 }
 return result;
}
