// To run code, enter "node practice.js" into terminal
// Code may not return value; instead, use console.log to view result

/*
Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
In case of multiple subarrays, return the subarray which comes first on moving from left to right.

Example 1:
Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements from 2nd position to 4th position is 12.
 
Example 2:
Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements from 1st position to 5th position is 15.
*/

let findIndices = (arr, targetSum) => {
  // W sliding window of dynamic length, need to declare+initiate 
  // tracking value (currSum) starting w first item, along with window's left and right ends
  let currSum = arr[0],
      left = 0, 
      right = 0;

  // sliding window of dynamic length
  while (left < arr.length) {  
    // if currSum == targetSum, return indices
    if (currSum == targetSum) {
      return [left, right];
    // if currSum > targetSum, shrink window from left and remove left value from currSum
    } else if (currSum > targetSum) {
      if (left == right) {
        currSum -= arr[left];
        left++;
        right++;
        currSum += arr[right];
      } else {
        currSum -= arr[left];
        left++;
      }
    // else expand window and add to currSum
    } else if (currSum < targetSum) {
      right++;
      currSum += arr[right];
    }
  }
}

console.log(findIndices([1,2,3,7,5], 12));