/**********************************
Coding Challenge:
    Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

/**********************************
Solution:
*/

// Solution 1:
function confirmEnding(str, target) {
    // if target equals the end of str, return true; otherwise, return false
    return str.slice(str.length - target.length) === target;        // argument gives us starting index; since only starting index provided, slice will copy everything from the starting index; then, we ask if that copy is equal to the target value
}

// Solution 2:
function confirmEnding(str, target) {
    return str.slice(-target.length) === target ;     // If a negative number is the first arg in slice(), the offset is taken backwards from the end of the string.
}
