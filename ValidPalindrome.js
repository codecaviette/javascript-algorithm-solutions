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

/* Solution 1 */
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
    
    return reversedString === lowerCase;            // Can compare directly bc they're primitive values
};
    // BigO time: O(n) ish == .split, .reverse, and .join are each about O(n) time
    // BigO space: O(n) == essentially making and storing 4 copies of input which would each grow as s grows; O(n) + O(n) + O(n) + O(n) == 4 O(n) == O(n)


/* Solution 2 */
var isPalindrome = function(s) {
    // remove all non-alphanum chars and make all lowercase
    let lettersOnly = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // swap first and last characters, move inwards, and if they ever dont match, retrun false
        // while first < last
    let leftIndex = 0,
        rightIndex = lettersOnly.length - 1;
    
    while (leftIndex < rightIndex) {
        if (lettersOnly[leftIndex] === lettersOnly[rightIndex]) {
            leftIndex++;
            rightIndex--;
        } else {
            return false;
        }
    }

    return true;
};
    // BigO time: O(n) == O(n) replace + O(n) toLowerCase + O(logN) while loop swapping 2 at a time
    // BigO space: O(n) == new variable lettersOnly will grow as input grows