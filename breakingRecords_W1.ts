function breakingRecords(scores: number[]): number[] {
    // Write your code here
    //OBJECTIVE
    //To find the minimum count and maximum count of two arrarys
    //ALGORITHM
    //1. Check if the array is empty and then return an array with two values[0,0]
    //2. Declare variables to hold the following
    //      mincount, maxcount, minimum number, maximum number
    //3. compare the numbers in the array with maximum and any time that a number from the array is greater than maximum, we increament our maximum count.
    //4. compare the numbers in the array with the minimum, anytime a number in the array is less than the minimum, we increment the minimum count
    //5. We finally then return maxCount and Mincount
    
    if(scores.length === 0 ) return [0,0]
    
    let minCount:number = 0;
    let maxCount:number = 0;
    let minimum: number = scores[0];
    let maximium:number = scores[0];
    
    for( let i = 0; i < scores.length; i++ ){
        if( scores[i] > maximium ){
            maximium = scores[i]
            maxCount++;
        }
        else{
            if(scores[i] < minimum){
                minimum = scores[i]
                minCount++
            }
        }
    }
    return [maxCount, minCount]

}