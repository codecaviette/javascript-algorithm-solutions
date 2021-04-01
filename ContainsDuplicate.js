/**********************************
Coding Challenge: 
  - Given an array of integers, find if the array contains any duplicates.
  - Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

  Example 1:
  Input: [1,2,3,1]
  Output: true

  Example 2:
  Input: [1,2,3,4]
  Output: false

  Example 3:
  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true
*/

/**********************************
Solution
*/ 
// Solution A (brute force, 2 nested loops, more expensive)
  //1. Pseudocode:
  // Check inputs: Safe to assume there will always be at least 1 item in array?

  // Brute force: 2 nested loops
      // Loop through array, starting with index i = 0
      // For each item, also loop through the rest of the array, starting with index j = i + 1
      // Compare the two items, and if they match return true
      // Otherwise, return false

  // 2. Code:
  var containsDuplicate = function(nums) {  
      if (nums.length === 0) {
          return false;
      }

      for (let i = 0; i< nums.length ; i++) {
          for (let j = i+1; j < nums.length; j++) {
              if (nums[i] == nums[j]) {
                  return true;
              }
          }
      }
      return false;
  };
  
  // 3. Big O: Time = O(n^2) bc 2 nested loops