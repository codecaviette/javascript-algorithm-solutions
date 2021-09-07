/**********************************
Coding Challenge: Go through an array and print out all of the elements through a recursive solution

*/

/**********************************
Solution:
*/

function print(array) {
    // Base case
    if (array.length < 2) return array;         // When array length is empty or 1, return current array value
  
    // Recursive call
    console.log(array[0]);                      // as long as array length is 2 or greater, log the first item...
    print(array.slice(1));                      // ... and call the print function again but this time passing everything except the array's first item
  
  }
  
  print([1, 2, 3,4,5]);         // logs 1
                                    //  2
                                    //  3
                                    //  4
  