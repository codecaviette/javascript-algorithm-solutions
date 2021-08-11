/**********************************
Coding Challenge: 
Given a string, return a string in reverse order.

Ex: 
    Input: "hello"
    Output: "olleh"
*/

/**********************************
Solution:
*/ 

function revString(str) {
    return str.split('').reverse().join('');
}

revString("hello");