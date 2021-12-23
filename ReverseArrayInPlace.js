/**********************************
Coding challenge:
Given an array, reverse items in place.

Ex1 input: [1,2,3,4,5]
    output:[5,4,3,2,1]

Ex2 Input: [2,4,6,8]
    Output: [8,6,4,2]

Ex3 Input: [5,5,8,8]
    Output: [8,8,5,5]
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

/*
BigO time: O(n) bc one loop

*/