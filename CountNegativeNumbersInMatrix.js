/* PROMPT 
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
*/

/* SOLUTION */
var countNegatives = function(grid) {
    // track negative number total
    let count = 0;
    // since negatives (if any) will be located on right side of subarrays, start looping right to left
    for(let i = grid[0].length - 1; i >= 0; i--) {
        for(let j = grid.length - 1; j >= 0; j--) {
            // negative elements will increment count
            if(grid[j][i] < 0) count++;
            // given the grid's sorted structure, last subarray will have the highest number of negatives, so once we hit a non-negative element in last subarray then that means there are no more negative elements in the array, so return count
            if(grid[grid.length-1][i] >= 0) return count;
        }
    }
    return count;
};