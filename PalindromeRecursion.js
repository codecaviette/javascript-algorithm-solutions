/*
Given a string, return true if it is a palindrome and false if it is not. Use recursion.
ex. input: 'kayak'
    output: true

Pseudocode:
// subroblem: check first and last characters to see if they match, then check the rest of characters (recursive call)
// rest of characters is getting smaller, so exit once we have 1 char or 0 chars (this takes care of even and odd number of characters)
  // 0 and 1 chars are palindromes, so return true
// otherwise, return false

*/

let isPalindrome = (string) => {
  
  if (string.length == 1 ||  string.length == 0) return true;

  if (string.charAt(0) == string.charAt(string.length-1)) {
    return isPalindrome(string.substring(1, string.length-1));
  }

  return false;

}

console.log(isPalindrome('kayaaak'));
 