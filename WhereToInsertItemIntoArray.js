/**********************************
Coding Challenge: 
    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
    
Ex: 
    - For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
    - Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/


/**********************************
Solution 1 (for loop):   
*/

function getIndexToIns(arr, num) {
// First step in problem solving is to translate the instructions: 
    // sort arr small to large
    // return lowest index where num should be inserted into arr
    // loop through arr to compare num to current index's value

// Next step is to take translations and write them in code by defining a function: 
    arr.sort(function(a, b) {                       // Use sort array method and compareFunction for numbers [[1_1n1a6b]]
        return a - b
    });

    let index = 0;                                  // For loops always need an initial value which is the starting index
    for (let i = 0; i < arr.length; i++) {          // Loop through array items, starting with smallest
        if ( num > arr[i] ) {                       // If num is greater than the iterated index value...
            index++ ;                               // ... then add 1 to index value
        }
    }
    return index;                                   // return final index value
}
// Last step is to call the function:
getIndexToIns([40, 60], 50);                        // Call function. Output: 1


/**********************************
Solution 2 (while loop):  
*/

function getIndexToIns(arr, num) {

    arr.sort(function(a, b) {               // Use sort array method with compareFunction b/c sorting numbers
        return a - b
    });

    let i = 0;                              // While loops require an initial value, similar to for loops
    while (num > arr[i]) {                  // As long as num is greater than incremented index's value...
        i++ ;                               // ... then i will be increased by 1
    }
    return i;                               // Regardless of whether the while loop was entered, val of i is returned
}

getIndexToIns([40, 60], 50);
