/**********************************
Coding Challenge: Given a number, num, generate the Fibonacci series up num^th number of items. 
                  Log each new term as you go.

Ex: Input: 4
    Output: 0, 1, 1, 2

*/

/**********************************
Solution:
*/
// w fib, always need to set initial values which are 0,1 or 1,1
    // Since output indicates starting with 0 as its first value, we'll use 0,1 and print 4 total values including 0,1
// also nd a temporary place holder var to keep track of next fib value (sum of preceeding 2 items)
// loop through 1 to num bc we're counting/printing the number of fib terms until we reach n number of terms
    // before any operations, print first term, starting our output at 0

let fibToNthItem = (num) => {
    let n1 = 0, 
        n2 = 1, 
        nextTerm;

    for (let i = 1; i <= num; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

fibToNthItem(4);

// Given a number, endPosition, return the value at that position of the Fib sequence

let fibToNthItem = (endPosition) => {
    let val1 = 0, 
        val2 = 1, 
        nextVal;
  
    for (let currPos = 2; currPos <= endPosition; currPos++) {
        //console.log(n1);
        nextVal = val1 + val2;
        val1 = val2;
        val2 = nextVal;
    }
    return nextVal;
  }
  
  console.log(fibToNthItem(4));         // 3 is at the 4th position in Fib seq ==  0 1 1 2 3  
  