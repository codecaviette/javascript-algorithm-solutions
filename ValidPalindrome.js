/*
Prompt: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/* Solution */

var isPalindrome = function(s) {
    // if s.length < 2, return true
    // remove all non-alphanumeric characters w regex
    // convert alphanumeric to lowercase 
    
    // option1: reverse method, check if reverse == input and return true/false
    // option2: recursion 
    // option3: swap first/last chars, move pointers inward 
    
    // return true/false
   
    if (s.length < 2) return true;
    
    let alphaNum = s.replace(/[^a-z0-9]/gi,"");
    let lowerCase = alphaNum.toLowerCase();
    let array = lowerCase.split("");
    let reversedString = array.reverse().join("");
    
    return reversedString === lowerCase;
    
};