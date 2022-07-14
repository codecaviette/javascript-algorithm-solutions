/*
Implement a function called countUniqueValues which accepts a sorted array
and counts the unique values in the array. There can be negative numbers in the array
but it will always be sorted.

countUniqueValues([1,1,1,2]);       // 2
countUniqueValues([1,2,3,4]);       // 4
*/

// approach: 2-pointers starting on left side comparing adjacent elements

let countUniqueValues = (sortedArray) => {

    if (sortedArray.length < 2) return sortedArray.length; 
    // initiate counter for unique values at 1 since we'll at least have 1 unique val if above edge case not met
    // initiate left pointer at 0th index and right pointer at 1st index
    let unique = 1, 
        left = 0, 
        right = 1; 
    // while right pointer is less than array.length, compare left and right values
    while (right < sortedArray.length) {
        // if they're not equal, increment counter
        if (sortedArray[left] != sortedArray[right]) unique += 1;
        // either way, move left and right pointers down 1
        left++;
        right++;
    }
    
    // return counter
    return unique;
}


countUniqueValues([1,1,1,2]);   // 2
countUniqueValues([1,2,3]);     // 3
countUniqueValues([]);          // 0
countUniqueValues([1]);         // 1

