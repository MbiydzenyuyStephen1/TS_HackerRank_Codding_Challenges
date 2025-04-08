//Nqme of the problem: Mars Exploration
    //Objective of the problem
    //For any given SOS word we are expected too find number of words that were
    //changed from the original SOS word
    //For example SOS = S O S
    //If we have SOSOSSPSSQSSOR, we have 3 characters that are different from SOS
    //and 3 characters that are the same as SOS

    //Algorithm
    //1. Split the string into an array of characters
    //2. Declare a variable to hold the count of changed characters, set it to 0
    //3. Iterate over the array
    //4. If the current character is not the same as the character at the same index
    //in the original word, increment the count
    //5. Return the count

    



function marsExploration(s: string): number {
    // Write your code here
    let splittedWord = s.split('');
    let  count:number = 0;
    
    for( let i = 0; i < splittedWord.length; i += 3 ){
        if( splittedWord[i] !== 'S'){
            count++;
        }
        if ( splittedWord[i+1] !== 'O'){
            count++;
        }
        if ( splittedWord[i+2] !== 'S'){
            count++;
        }
        
    }
    return count;

}
