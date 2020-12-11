/**********************************
Coding Challenge:
    Create multi-dimentional array from 1D array
    Write a function that splits an array (first argument) into groups the length of "size" (second argument) and returns them as a two-dimensional array.

Ex:
    chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
*/

/**********************************
Solution (for loop + slice method):
*/

function chunkArrayInGroups(arr, size) {
// First step in problem solving is to interpret instructions:
    // loop through array
    // split arr into groups the length of size
    // return new multi-dimentional array

// Next step is to take interpretation and write it in code:
let newArr = [];                                // For loop always needs initial value to then fill

for (let i = 0; i < arr.length; i += size) {    // Loop through arr; at end of each iteration, incr i by size value
    newArr.push(arr.slice(i, i+size));          // Slice method creates a new array which pushes to newArr var

}
return newArr;                                  // Return new array of arrays
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);    // output:  [["a", "b"], ["c", "d"]]
