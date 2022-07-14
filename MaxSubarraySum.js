/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate hte max sum of n consecutive elements in the array.

maxSubarraySum([4,2,1,5], 1)    // 5
maxSubarraySum([], 4)           // null
*/

const maxSubarraySum = (arr, n) => {

    // calculate sum of first window (0th index to n-1th index == n elements) and set equal to current sum 
    let curr = 0;
    for (let i = 0; i < n; i++) {
        curr += arr[i];
    }

    // max = curr
    let max = curr;
    // loop through array starting at nth index
    for (let i = n; i < arr.length; i++) {
        // curr + arr[i] - arr[i-n]
        curr += arr[i] - arr[i-n];
        // update max sum if curr is larger
        max = Math.max(max, curr);
    }
        
    // return max 
    return max;
}

maxSubarraySum([4,2,1,5], 1);