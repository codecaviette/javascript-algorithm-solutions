/* Prompt:
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
*/

/* Solution */
var targetIndices = function(nums, target) {
    let result = [];
    // sort nums in ascending order
    let sorted = nums.sort((a,b) => a-b);
    // loop thru and push matches to result
    sorted.forEach((num,index) => {
        if (num === target) result.push(index);
    })
    // return result
    return result;
};

/* BigO
    Time: O(nlogn) since it incurs O(nlogn) to sort + O(n) to loop thru nums
    Space: O(1) since running this fxn doesn't take up additional memory as nums grows
*/

const testCases = [
    {
        args: [ [1, 2, 3], 2 ],
        expected: [ 1 ]
    },
    {
        args: [ [3, 7, 5, 3, 3], 3 ],
        expected: [ 0, 1, 2 ]
    }
]

testCases.forEach((testCase, idx) => {
    [nums, target] = testCase.args;
    const got = targetIndices(nums, target);
    if (JSON.stringify(got) != JSON.stringify(testCase.expected)) {
        const errorMsg = [
            `Test case ${idx + 1} FAILED`,
            '-----',
            `GOT:\n\t${got}`,
            '\n',
            `EXPECTED:\n\t${testCase.expected}`,
            '\n\n'
        ]
        console.error(errorMsg.join('\n'));
    }
})