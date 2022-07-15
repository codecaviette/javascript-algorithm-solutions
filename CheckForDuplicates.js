/*
Given two lists of numbers, determine whether they have duplicate values. 
*/

// SOLUTION 1: COMPARE LENGTHS
const areThereDuplicates = (...args) => {       // spread operator takes all values passed to it..
    let argsArray = [...args];                  // ..and dropping them into an array..
    let unique = new Set(argsArray);            // ..which can be used to create new Set (which can take an array literal to initiate)
    if (unique.size != argsArray.length) {
        return true;
    } else {
        return false;
    }
}


// SOLUTION 2: MULTIPLE POINTERS
const areThereDuplicates = (...args) => {        // preceeding a list of elements with spread operator auto puts into an array
    let sorted = args.sort((a,b) => a-b);

    let left = 0,
        right = 1;
        
    while (right < sorted.length) {
        if (sorted[left] == sorted[right])  return true;
        left++;
        right++;
    }
    return false;
}


areThereDuplicates(1, 2, 1);
areThereDuplicates(1, 2, 3);