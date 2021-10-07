/**********************************
Coding challenge:  Take array and find the pairs of that add up to 10 (or a target number)

let array = [1,4,5,2,7,6,3];

3 possible time complexities - solve for each:
- N^2
- N LogN
- N
*/

/**********************************
Solutions:
*/

// O(n^2) time:
  // Declare empty array for pairs
  // Loop through array starting at index 0 with iterator i
    // Loop thru array again starting at index 0 with iterator j
      // As long as i doesnt equal j, see if they add to 10
        // if they do, push items to new array

let pairs = [];

function getPairs(array, targetNum) {
  for (let i=0; i<array.length; i++) {
    for (let j=i; j<array.length; j++) {	// j=i (rather than j=0) will keep you from iterating over full array again when i increments (which would cause duplicate pairs), just goes through items starting at i and beyond
      if ((i !== j) && (array[i] + array[j] == targetNum)) {      // compare indices (rather than values array[i] !== array[j]) incase of duplicate values (like two 5’s in the array)
        pairs.push([array[i], array[j]]);
      }
    }
  } return pairs;       
};

getPairs([1,4,5,2,7,6,3], 10);		

/*
O(n) time:
declare empty object and array we'll fill in later
loop thu array
  calculate difference (targetNum - iterated item)
  does diff exist in obj?
    if no, add item to obj as key and index as value
    if yes, push targetNum and diff to new array, and remove diff from obj
return new array
*/

let obj = {},
    newArr = [];

function getPairs(array, targetNum) {
  for (let i=0; i<array.length; i++) {
    let diff = targetNum - array[i];
    if (obj.hasOwnProperty(diff)) {
      newArr.push([array[i], diff])
    } else {
      obj[array[i]] = i;	// Big O space is largest w this soln bc obj is doubling what’s in array 

    }
  } return newArr;
};

getPairs([1,4,5,2,7,6,3], 10);			// output: [ [ 6, 4 ], [ 3, 7 ] ]

/* O(n log n) time:

* Can also do for loop keeping track of first item, if difference exists, push both items to new array and remove items from array, keep looping

declare empty array which will be result
sort array in ascending order  (O n log(n)) time
declare 2 pointers, one at each end of sorted array
  check to see if pointers sum to targetNum
    if yes, push numbers to new array
  if sum is lower than targetNum, increment lower pointer
  if sum is higher than targetNum, increment higher pointer
*/

function getPairs(array, targetNum) {
  let result = [];
  let sorted = array.sort((a,b) => a-b);               // sorting numbers nds a,b fxn
  let lowIndex = 0,				  // define low and high indices 
      highIndex = sorted.length-1;

  while (lowIndex < highIndex) {
    if (sorted[lowIndex] + sorted[highIndex] == targetNum) {
      result.push([sorted[lowIndex], sorted[highIndex]]);
      lowIndex++;
      highIndex--;
    }

    else if (sorted[lowIndex] + sorted[highIndex] < targetNum) {
      lowIndex++;
    }

    else if (sorted[lowIndex] + sorted[highIndex] > targetNum) {
      highIndex--;
    }
  }

  return result;

};
