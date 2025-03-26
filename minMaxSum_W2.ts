     //NAME OF THE PROBLE: Mini-Max Sum
     
    //OBJECTIVE OF THE PROBLEM
     //The Objective is to find the minimum sum of all the numbers in
     //  the array after removing the minimum number and vice versa for maximum sum
   
    //ALGORITHM
    //1. Declare two variables to hold the presume biggest and smallestnumbers
    //2. iterate over the arrays to find the smallest and maximum number
    //3. Declare another varible to hold the sum or the numbers in the arrray at each iteration
    //4. Iterate and sum them
    //5. To find the min sum and the max sum, we subtract the maxNumber and the minNumber 
    //      from the total sum respectively and store in their variables
    //6. Console out the resuslts

function miniMaxSum(arr: number[]): void {
    
let smallestNumber: number = arr[0];
let maximumNumber: number = arr[0];

for(let i = 0; i < arr.length; i++){
    if( arr[i] < smallestNumber ) smallestNumber = arr[i];
    if( arr[i] > maximumNumber ) maximumNumber = arr[i];
}

let totalSum = 0;
for( let i = 0; i < arr.length; i++){
    totalSum += arr[i];
}

const minSum = totalSum-maximumNumber;
const maxSum = totalSum-smallestNumber;


console.log(minSum + " " + maxSum)




}
