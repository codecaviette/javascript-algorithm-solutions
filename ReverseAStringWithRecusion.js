/**********************************
Coding Challenge: Write a recursive function that will return a reversed copy of a given string

*/

/**********************************
Solution
*/

function reverse(str) {
  // Base case
  if (str.length < 2) return str;

  // Recursive call
  return reverse(str.slice(1, str.length)) + str[0];        // Process ENTIRE line/return stmt each time recursive call is made (including str[0])
}

reverse('apple');