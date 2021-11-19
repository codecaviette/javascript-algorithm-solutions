/**********************************
Coding challenge:
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Ex: 
    Input: [[1,2],[3]]
    Output: 6

*/

/**********************************
Solution: 
*/
// Pseudocode:
// loop through both levels of array
// multiply product of each subarray

function multiplyAll(arr) {
    var product = 1;                                   // declare var equal to initial val which we'll fill w fxn

    for (var i = 0; i < arr.length; i++) {             // i represents the top layer of iteration where first array item = [1,2]
        for (var j = 0; j < arr[i].length; j++) {      // loop through each item in subarrays; j represents 2nd layer of iteration where first item is the 1 of [1,2]
            product = product * arr[i][j];             // set product equal to product * iterated subarray item
        }
    }
    return product;
}

multiplyAll([[1,2],[3]]);                              // output: 6