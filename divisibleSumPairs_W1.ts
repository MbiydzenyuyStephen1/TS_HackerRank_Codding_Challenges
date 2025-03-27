//Name  of the problem: Divisible Sum Pairs
    //Objective of the problem
    
        //Objective is to find the number of pairs in the array that are divisible by k
        //  where the sum of the pair is divisible by k

        //Algorithm
        //1. Declare a variable to hold the count of the pairs
        //2. Iterate over the array
        //3. Iterate over the array again starting from the second index
        //4. Check if the sum of the pair is divisible by k
        //5. If it is, increment the count
        //6. Return the count

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    // Write your code here
    let count: number = 0;
    
    for (let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            if( ( ar[i] + ar[j] ) % k == 0 ){
                count++;
            }
        }
    } return count;

}
