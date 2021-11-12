// To run code, enter "node practice.js" into terminal

function squareArrayInPlace(intArray) {

    intArray.forEach((int, index)) => {
        intArray[index] = intArray[index] * int;
    }
}