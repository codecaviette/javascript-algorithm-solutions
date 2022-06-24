/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/* Solution */
var longestCommonPrefix = function(strs) {
    
    // declare prefix = ""
    let prefix = '';
    
    // compare jth char of each item to the jth char of 1st item
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 0; i < strs.length; i++) {
            let firstStringsLetter = strs[0][j];
            // if don't match, exit loop and return current prefix
            if (firstStringsLetter !== strs[i][j]) {
                return prefix;
            }
            // if we reach the last item and its jth char matches that of 1st item, add char to prefix
            if (i == strs.length - 1) {
                prefix += firstStringsLetter;    
            }
        }
    }
        
    // return prefix
    return prefix;

};