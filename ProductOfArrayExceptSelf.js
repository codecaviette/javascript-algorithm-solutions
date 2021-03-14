/**********************************
Coding Challenge:
    Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

    Example:
    Input:  [1,2,3,4]
    Output: [24,12,8,6]

    Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

    Note: Please solve it without division and in O(n).
*/


/**********************************
Solutions:
*/

// Solution A - brute force (and doesn't meet requirements)
    // 1. Pseudocode:
        // Big O time = O(n^2)
        // loop through array twice (nested)
            // loop through nums array (iterate by i)
                // within a nested loop (iterated by j) and as long as j does not equal i, multiply all items and add it to new array "output"
    // 2. Code:
    var productExceptSelf = function(nums) {

        let output = [];
        let product = 1;

        for (let i=0; i<nums.length; i++) {                 // Loop through nums array with iterator i
            for (let j=0; j<nums.length; j++) {             // ...and for each item in array w iterator i, loop thru nums array again with iterator j
            if (i !== j) {                               // as long as i does not equal j
                product = product * nums[j];             // set product equal to itself times the nums value at j index
            }
            else continue;                               // if i does equal j then just continue on to next j value and start at top of loop
            }
            output.push(product);                           // once an i loop has completed, push the end product as an item to the output array
            product = 1;                                    // ...and reset product equal to 1 so that the loop can iterate the next i item
        }

        return output;                                      // return the final output array
    };
