function plusMinus(arr: number[]): void {
    
    //Algorithm
    //Objective is to sort numbers of the type 0,negative and postive, then look for their ratios and round to 6decimal places
    //1. Declare three variables of type array of numbers to hold the numbers 
    //2. compute the total number of the nmbers in the array
    //3. check the value of numbers and push them to their respective arrays
    //4. Print each result while dividing the number of numbers on each array by the total number of numbers on the initial array to have the ratio of each of the  three categories and the round them to 6 decimal places
    // Write your code here
    
    let positiveNum: number[] = [];
    let negativeNum: number[] = [];
    let zeroNum: number[] = [];
    const totalNumbers: number = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNum.push(arr[i]);
        } else if (arr[i] < 0) {
            negativeNum.push(arr[i]);
        } else {
            zeroNum.push(arr[i]);
        }
    }

    console.log((positiveNum.length / totalNumbers).toFixed(6));
    console.log((negativeNum.length / totalNumbers).toFixed(6));
    console.log((zeroNum.length / totalNumbers).toFixed(6));

}
