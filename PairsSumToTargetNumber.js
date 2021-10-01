/**********************************
Coding challenge: 
Take array and find the pairs of that add up to 10 (or a target number)

let array = [1,4,5,2,7,6,3];

3 Time complexities possible - solve for each:
N^2
N LogN
N

*/

/**********************************
Solution
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
