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
// Remove all non-alphanum chars and then loop w 2 pointers to compare
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

/* Solution 3 */
// Start w pointers, as each char is visited, then check if alphanum and only compare a pair when they're both alphanum
var isPalindrome = function(s) {
    
    // empty or one-char string is a palindrome 
    if (s.length < 2) return true;
    
    // start pointers at beginning and end
    let left = 0,
        right = s.length - 1;
    
    while (left < right) {
        // starting at ends, find pair of alphanum chars; continue moving inwards until find pair
        if (isAlphaNum(s[left]) === false) {     // if not alphanum, continue moving inward until we find one
            left++;
            continue;       // exit current iteration and start next iteration       
        }
        
        if (isAlphaNum(s[right]) === false) {
            right--;
            continue;
        }

        // finally, once we get to an alpha pair, see if they match. if they don't match, return false and exit fxn
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        // if we get to this step, means they match and we continue moving inwards
        left++;
        right--;
        
    }
    // if false is not returned before while loop exits
    return true;
    
};

// helper fxn to check if char is alphanum
var isAlphaNum = function(char) {
    // not alphanum
    let regExp = /[^a-z0-9$]/gi;
    // returns true if char is not a non-alphanum, ie it IS an alphanum
    return !regExp.test(char);
};

    // BigO time: Still O(n) bc need to touch each character, but less than Solution 2 bc combining the regex step with the loop/pointer