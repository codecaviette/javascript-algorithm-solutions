/**********************************
Coding Challenge: 
    Count the number of times each character occurs in a string.

    Input: var string = "apple";
    Output:
        a:1
        p:2
        l:1
        e:1
*/

/**********************************
Solution:
*/

// 1. Pseudocode:
// Convert string to an array so I can manipulate it
// Loop thru array and create a new object, adding key:value pairs as you go
  // Need to first add the object key with value 0 so you can then increment the value
  // If the loop finds the same key, it will simply iterate the value of that key

// 2. Code: 
function countCharacterOccurances(str) {
    let strArray = str.split("");                    // Converts string to an array separating by each character
    let strObject = {};                              // We'll fill this object w key:value pairs of letter:count from the array

    for (let i=0; i < strArray.length; i++) {        // Loop thru array...
        if (strObject[strArray[i]] == undefined)     // and if the obj doesn't have a key of strArray[i]...
            strObject[strArray[i]] = 0;              // ...then create an obj key of strArray[i] with value of 0
            strObject[strArray[i]]++ ;               // Now that the key exists, increment its value
        }
    return strObject;
}

countCharacterOccurances('apple');        // Output: {a: 1, p: 2, l: 1, e: 1}

// 3. big o
// time complexity: O(n) = O(n) + O(m) = split method + for loop 
// space complexity: O(n) = O(n) + O(m) = strArray + strObject