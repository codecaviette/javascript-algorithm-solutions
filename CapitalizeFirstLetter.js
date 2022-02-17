/**********************************
Coding Challenge:
    Capitalize the first letter of each word from the sentence: "freeCodeCamp is an awesome resource."
*/

/**********************************
Solution
*/

let mySentence = "freeCodeCamp is an awesome resource.";          // Assign string to a variable so can work with it
let words = mySentence.split(" ");                                // Split sentence into array so we can manipulate each individually

for (let i = 0; i < words.length; i++) {                          // Loop thru words array using for loop ...
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)     //... and for each item, capitalize first letter + remainder of string
}
words.join(" ");        // Join all recently-muted items into a string

// Big O time: O(n) == split + one loop + join == O(n) + O(n) + O(n) 