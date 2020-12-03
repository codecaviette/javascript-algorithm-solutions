/**********************************
Coding Challenge: 
    Use the sort array method to arrange items in an array, either strings in alphabetical order or numbers in ascending/descending order.
*/


/**********************************
Solution:
*/

// Syntax:
sort(compareFunction);        // compareFunction is only needed for sorting numbers*, as numbers are by default sorted as strings

// Ex - Array of strings:   
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();                                           // Notice that no compareFunction is needed
                                                         // output: ["Apple", "Banana", "Mango", "Orange"]

// Ex - Array of numbers: 
var numbers = [1, 4, 26, 12];
numbers.sort(function(a,b) {                             // Notice that compareFunction IS needed when sorting numbers!!
    return a-b;
})                                                       // output:  [1, 4, 12, 26];
