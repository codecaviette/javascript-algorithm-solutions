/**********************************
Code Challenge:
    Palindromes read the same backwards and forwards. Determine whether a given variable is a palindrome or not.

Ex:
    Input: x = 121;
    Output: true
*/

/**********************************
Solution:
*/

var isPalindrome = function(x) {
    x = x + "";                                     // Convert number to a string so you can then use the
    return x === x.split("").reverse().join("");    // String split method on it to split into individual letters/array of strings,
}                                                   // then reverse ind letters and rejoin them to create full string.
                                                    // Use === to compare x to reversed version, and it'll return true if they're equal; otherwise will return false
