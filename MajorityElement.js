/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    // declare empty obj to store occurance count
    // declare occuranceMin = n/2
    let elementOccurance = {};
    let minOccurance = nums.length/2;
    let majority = 0;
    
    // count occurance of each element
        // loop thru array and add count to obj
    nums.forEach(element => {
        element in elementOccurance ? elementOccurance[element]++ : elementOccurance[element] = 1;
    })
    
    // return the element that occurs most often ( > n/2 times)
        // loop thru obj
    for (let [element, occurance] of Object.entries(elementOccurance)) {
        if (occurance > minOccurance) majority = element;
    }
    
    return majority;    
};