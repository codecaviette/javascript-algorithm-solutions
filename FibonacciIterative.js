/**********************************
Coding Challenge: Given a number, num, generate the Fibonacci series up to num^th term. 
                  Log each new term as you go.

Ex: Input: 4
    Output: 0, 1, 1, 2

*/

/**********************************
Solution:
*/
// w fib, always need to set initial values which are 0,1 (sometimes ppl start at 1,1 - dn matter, just clarify w interviewer)
// also nd a temporary place holder var to keep track of next fib value (sum of preceeding 2 items)
// loop through 1 to num bc we're counting/printing the number of fib terms until we reach n
    // before any operations, print first term 

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

fibToNthItem(5);