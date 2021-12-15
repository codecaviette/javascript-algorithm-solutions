/**********************************
Coding challenge:
Given an array, reverse items in place.

Ex: input: [1,2,3,4,5]
    output:[5,4,3,2,1]
*/  


/**********************************
Solution
*/
function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;
  
    while (leftIndex < rightIndex) {
  
        // Swap characters
        const temp = arrayOfChars[leftIndex];
        arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
        arrayOfChars[rightIndex] = temp;
  
        // Move towards middle
        leftIndex++;
        rightIndex--;
    }
}