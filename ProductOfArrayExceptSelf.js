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

// Solution B:
    // loop through array twice, calculating product of each side excluding i
        // find product of items on left side (1st iterated item = 1)
        // find product of items on right side (1st iterated item = 1)
        // multiple prodR and prodL for final product

// Solution C - optimized:
    // 1. Pseudocode:
        // Big O time = O(n + m) = O(n)
        // loop through array two times (not nested)
            // first loop thru nums array *Left to Right* (creating new *output* array **starting w value 1** - this'll push/shift product down)
            // then loop thru nums array again *R to L* multiplying the values now in the **output array** by num array values (**starting w mult by 1**)
    // 2. Code:
    var productExceptSelf = function(nums) {

        let left = 1;           // for each loop (left & right), the first iterated item will equal 1 (this helps push the product right/left)
        let right = 1;
        let output = [];        // to calc output, we first iterate L-R on nums array, then using the left output values, we iterate R-L

        // first, loop L to R to create new array starting w value 1
        for (let i=0; i<nums.length; i++) {         
            // output = 1, 1*nums[0]...
            output[i] = left;                       
            left = nums[i] * left;                  
        }

        // then, loop R to L multiplying by values in new output array
        for(let i=(nums.length-1); i>=0; i--) {
            // output = 1, 1*nums[length-2]...
            output[i] = right * output[i];
            right = nums[i] * right;

        }
    return output;
    };
