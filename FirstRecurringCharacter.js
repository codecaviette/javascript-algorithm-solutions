/**********************************
Coding Challenge:  Given an array, return the first character to reoccur

  Input: [2,5,1,2,3,5,1]
  Output: 2

  Input: [2,1,1,2,3,5]
  Output: 1

  Input: [2,3,4,5]
  Output: undefined
*/

/**********************************
Solutions:
*/ 

// Solution A (most expensive, 2 nested loops):
// 1. Pseudocode:
    // input check: can i assume the array will have at least 1 item?

    // loop through the array items
      // starting with the first array item, see if the same value exists in the rest of the array by looping thru the rest of the array
      // and if the currently-iterated item matches anything...
      // return that item   
    // otherwise, return undefined
// 2. Translate to code:
    ```
    function firstRecurringCharacter(input) {             // Define the fxn, which takes a paramater called "input"
      for (let i = 0; i < input.length; i++ ) {           // Loop thru the entire array using i index variable...
        for (let j = i + 1; j < input.length; j++) {      // and for each item, also iterate thru array again starting with index j (ie. i+1)
          if (input[i] === input[j]) {                    // and if the i iterated item matches the j iterated item...
            return input[i];                              // then return input[i]
          }
        }
      }
      return undefined;
    }

    firstRecurringCharacter([2,5,1,2,3,5,1]);
    ```
// 3. Big O
    // Time complexity: O(n^2)    - Two nested for loops has this speed
    // Space complexity: O(1) ?     - Regardless of input size, we'll always use the same amt of memory to store index variables

