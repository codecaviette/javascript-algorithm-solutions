/**********************************
Coding Challenge: Given a number, n, return the n^th term of the Fibonacci series. 

Ex: Input: n = 4
    Output: 3 == 0, 1, 1, 2, 3    

*/

/**********************************
Solution
*/

let fib = (n) => {
    if (n < 1) return 0;
    else if (n <= 2) return 1;       
    else return fib(n-1) + fib(n-2);
}

console.log(fib(4));        // 3