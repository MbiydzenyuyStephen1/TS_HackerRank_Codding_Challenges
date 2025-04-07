//Name of the problem: Counting Valleys

//Objective of the problem
    //Objective is to count the number of valleys in a given path

//Algorithm
    //1. Declare a variable to hold the number of valleys, set it to 0      
    //2. Declare a variable to hold the altitude, set it to 0
    //3. Iterate over the path
    //4. If the current step is 'U', increment the altitude
    //5. ir alltitude is 0, increment the number of valleys
    //6. If the current step is 'D', decrement the altitude
    //7. Return the number of valleys

function countingValleys(steps: number, path: string): number {
    // Write your code here
    let valley = 0;
    let altitude = 0;
    
    for ( let i = 0; i < path.length; i++ ) {
        if( path[i] === 'U'){
            altitude++;
            if ( altitude === 0 ){
                valley++;
            }
        }
        if ( path[i] === 'D'){
            altitude--;
        }
    } return valley;

}
