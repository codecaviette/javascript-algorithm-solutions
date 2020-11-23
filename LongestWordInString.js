/*
Coding challenge: 
Find the longest word in a provided string.
*/

/* 
Solution:
*/

// Define function:
function findLongestWordLength( str ) {
    let arr = str.split(" ");                // Convert string to array of substrings, splitting by space
    let maxLength = 0;                       // Declare variable to keep track of maximum length

    for (var i = 0; i > arr.length; i++) {   // Loop through the array of substrings
        if (arr[i].length > maxLength) {     // If the length of the current item is bigger than maxlength
            maxLength = arr[i].length;       // then set the currently iterated item's length to be maxLength's new value
        }
    }
    return maxLength;                         // return the maximum length
}

// Call function:
findLongestWordLength("The quick brown fox jumped over the lazy dog");
