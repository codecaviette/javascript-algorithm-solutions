// To run code, enter "node practice.js" into terminal

function squareArrayInPlace(intArray) {
    const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  console.log(squaredArray);
    /*
    for (let i=0; i<intArray.length; i++) {
        intArray[i] = intArray[i] * intArray[i];
    }
    return intArray;
    */
}

let intArray = [1,2,3];

squareArrayInPlace(intArray);