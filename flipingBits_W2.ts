//Name of the problem: Flipping Bits

//Objective of the problem
    //Objective is to flip the bits of a number

    // algorithm of the problem above
//1. Declare a variable to hold the binary representation of the number
//2. Declare a variable to hold the binary representation of the number in 32 bits
//3. Declare a variable to hold the binary representation of the number in 32 bits as an array
//4. Declare a variable to hold the flipped binary array
//5. Handle the case where n is 0 and return the result in base 10
//6. Convert the number to binary and store it in the binary representation variable
//7. Convert the binary representation to 32 bits and store it in the binary representation in 32 bits variable
    
function flippingBits(n: number): number {
    // Convert the number to its binary representation
    let binaryNumber = "";
    let binaryRepresentation = "";
    let binaryRepresentationIn32Bits: string;
    let binaryRepresentationIn32BitsArr: string[] = [];

    // Handle the case where n is 0
    if (n === 0) {
        return parseInt("11111111111111111111111111111111", 2);
    }

    // Convert the number to binary
    while (n > 0) {
        let remainder = n % 2;
        binaryNumber += remainder;
        n = Math.floor(n / 2);
        binaryRepresentation = binaryNumber.split("").reverse().join("");
        binaryRepresentationIn32Bits = binaryRepresentation.padStart(32, '0');
        binaryRepresentationIn32BitsArr = binaryRepresentationIn32Bits.split("");
    }

    // Flip the bits
    let flippedArray: string[] = [];
    for (let i = 0; i < binaryRepresentationIn32BitsArr.length; i++) {
        if (binaryRepresentationIn32BitsArr[i] === "1") {
            flippedArray.push("0");
        } else {
            flippedArray.push("1");
        }
    }

    // Convert the flipped binary array back to a number
    let resultInBase10 = 0;
    flippedArray = flippedArray.reverse();
    for (let i = 0; i < flippedArray.length; i++) {
        let value = parseInt(flippedArray[i]);
        resultInBase10 += value * Math.pow(2, i);
    }

    return resultInBase10;
}




