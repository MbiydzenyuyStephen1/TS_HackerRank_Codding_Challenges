//Name of the problem: Diagonal Difference

//Objective of the problem
    //Objective is to find the absolute difference between the sum of 
    // the two diagonals of a square matrix

//Algorithm
    //1. Declare a variable to hold the sum of the primary diagonal 
    //2. Declare a variable to hold the sum of the secondary diagonal
    //3. Iterate of over the matrix, get the values of the first diagonal
    //that is from the top left to the bottom right, sum them and store in diagonal1
    //4. Iterate of over the matrix, get the values of the second diagonal
    //that is from the top right to the bottom left, sum them and store in diagonal2
    //5. Calculate the absolute difference between the two diagonal sums
    //6. if resultt is negative, multiply by -1 to make it positive
    //7. return the result


function diagonalDifference(arr: number[][]): number {
    // Initialize sums for the two diagonals
    let diagonal1 = 0; // Sum for the primary diagonal (top-left to bottom-right)
    let diagonal2 = 0; // Sum for the secondary diagonal (top-right to bottom-left)

    // Loop through the rows of the square matrix
    for (let i = 0; i < arr.length; i++) {
        // Add the element from the primary diagonal
        diagonal1 += arr[i][i];

        // Add the element from the secondary diagonal
        diagonal2 += arr[i][arr.length - i - 1];
    }

    // Calculate the absolute difference between the two diagonal sums
    let result = diagonal1 - diagonal2;
    if (result < 0) {
        result = -result; // Convert negative result to positive
    }

    // Return the absolute difference
    return result;
}