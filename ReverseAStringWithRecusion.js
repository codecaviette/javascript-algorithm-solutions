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

// Base case: If str is empty or 1 character, we don't need to do anything to reverse the string and we can simply return it

// Recursive-call-building thought process:
  // 1. I am trying to reverse a string. A problem one step simpler would be to reverse a string that is one letter shorter.
  // 2. I will assume, and believe with every fiber of my being, that my function can correctly reverse a string that is one letter shorter than the one I am currently trying to reverse.
  // 3. I ask myself: Since I know and believe that my function can correctly reverse a string that is one letter shorter than the one I am currently trying to reverse, how can I reverse the whole string? Well, I can take all of the characters except the first one, reverse those (which I know and believe that my function can do), and then tack the first character on to the end!

// Recursive call behind the scenes:
  /*
  1. First Part of the recursion method: "Wind up"
  You need to remember that you won’t have just one call– you’ll have several nested calls

  Each call: str === "?"        	            reverse(str.slice(1, str.length)) + str[0]
  1st call – reverse("Hello")   will return   reverse("ello")                   + "h"
  2nd call – reverse("ello")    will return   reverse("llo")                    + "e"
  3rd call – reverse("llo")     will return   reverse("lo")                     + "l"
  4th call – reverse("lo")      will return   reverse("o")                      + "l"
  5th call – reverse("o")       will return   reverse("")                       + "o"

  2. Second part of the recursion method: "Unwind"
  The method hits the if condition and the most highly nested call returns immediately

  5th call will return reverse("") + "o" = "o"
  4th call will return reverse("o") + "l" = "o" + "l"
  3rd call will return reverse("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverse("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverse("ello") + "h" = "o" + "l" + "l" + "e" + "h"

  */