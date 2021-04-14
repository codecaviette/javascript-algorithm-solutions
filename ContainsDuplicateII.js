/**********************************
Coding Challenge: 
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

  Example 1:
  Input: nums = [1,2,3,1], k = 3
  Output: true

  Example 2:
  Input: nums = [1,0,1,1], k = 1
  Output: true

  Example 3:
  Input: nums = [1,2,3,1,2,3
*/

/**********************************
Solutions:
*/

// Solution A (brute force, 2 nested loops, more expensive)
  // 1. Pseudocode:
    // absolute value of a value:  Math.abs(value)

    // loop thru i=0
        // loop thru j=i+1
            // if nums[i] == nums[j] && Math.abs(i-j) <= k
                // return true
        // otherwise, return false
  // 2. Code:
  var containsNearbyDuplicate = function(nums, k) {
      for (let i=0; i< nums.length; i++) {
          for (let j=i+1; j<nums.length; j++) {
              if (nums[i] == nums[j] && (Math.abs(i-j) <= k)) {
                  return true;
              }
          }
      } return false;
  };
  
  // 3. Time complexity: O(n^2) bc 2 nested loops
     // Space comp: O(1) ? since no objects are being created?