//Name of the problem: Sparse Arrays
//Objective of the problem  
    // Objective is to find the number of times a query string appears in an array of strings

    // Algorithm   
        // 1. Declare a variable to hold the results of the queries
        // 2. Iterate over the queries array
        // 3. Declare a variable to hold the count of the query string
        // 4. Iterate over the strings array
        // 5. Check if the query string is equal to the string in the strings array    
        // 6. If it is, increment the count
        // 7. Push the count to the results array
        // 8. Return the results array


function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code 
    let results: number[] = [];
    
    for( let i = 0; i < queries.length; i++){
        let count = 0;
        
        for( let j = 0; j < strings.length; j++){
            if( strings[j] === queries[i] ){
                count++;
            }
        }
        results.push(count);
    }
    return results;
}