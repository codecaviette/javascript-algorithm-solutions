/**********************************
Coding Challenge: Given a number, n, return the  n^th term of the Fibonacci series. 

Ex: Input: 4
    Output: 2 == 1, 1, 2, 3

*/

/**********************************
Solution
*/

let fib = (n) => {
    if (n < 2) return n;       
    else return fib(n-1) + fib(n-2);
}

console.log(fib(4));