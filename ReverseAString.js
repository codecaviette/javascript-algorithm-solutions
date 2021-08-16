/**********************************
Coding Challenge: 
Given a string, return a string in reverse order.

Ex: 
    Input: "hello"
    Output: "olleh"
*/

/**********************************
Solution 1: Using built-in methods
*/ 

function revString(str) {
    return str.split('').reverse().join('');
}

revString("hello");

/**********************************
Solution 2: Using loop
*/ 

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');