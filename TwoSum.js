/**********************************
Coding Challenge:    
  - Given an array of integers "nums" and an integer "target", return indices of the two numbers such that they add up to target.
  - You may assume that each input would have exactly one solution, and you may not use the same element twice.
  - You can return the answer in any order.

  Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

  Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

/**********************************
Solutions 
*/

// Solution A (brute force - 2 nested loops (expensive))
    // 1. Pseudocode:
    // loop through, starting with first item
    // compare that first item with the rest of the items by looping through them
        // when comparing, see if the sum of the two items equals target
        // if so, then return the indices of those two items
    // 2. Code:
  
    var twoSum = function(nums, target) {
        for (let i = 0; i < nums.length; i++) {           // Loop through array items...
            for (let j= i+1; j < nums.length; j++) {      // ...and for each item, loop again starting with index i+1
                if (nums[i] + nums[j] == target) {        // ...and if the values at both indices sum to the target value
                    return [i, j];                        // ...then return array with i and j as the values 
                }     
            }
        }
    };

    twoSum([2,7,11,15], 9);       // Output: [0,1]
    
    // 3. Big O 
    // Time: O(n*n) = O(n^2)  - Bc 2 nested loops always has that speed 
    // Space: O(1)?  - Regardless of the size of the input, the result (returned/saved value) will take up the same amt of memory 

// Solution B (less expensive, optimized with an object + single loop)
    // 1. Pseudocode:
    // loop through array items
        // build object by adding array items to it (key:value pairs)
        // get difference between target and currently-iterated array item
        // check to see if that value is included in object
        // if so, return array item's index and value of obj's key:value pair -- return in an array
        // otherwise, add a new key:value pair to obj
    // 2. Code: 
    var twoSum = function(nums, target) {
        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            if (target - nums[i] in obj) {
                return [i, obj[target - nums[i]] ];
            }
            obj[nums[i]] = i;
        }
    };
    
    // 3. Big O
    // Time: O(n)  - A single loop is O(n) and searching an object is O(1), so when at scale, resulting Big O is O(n)
    // Space: O(n)  - Creating an object always takes O(n) memory bc its size is dependent on size of input
    