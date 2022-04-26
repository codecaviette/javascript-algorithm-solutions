/**********************************
Coding Challenge: Given a number, n, return the n^th term of the Fibonacci series. 

Ex: Input: n = 4
    Output: 3 == 0, 1, 1, 2, 3    

*/

/**********************************
Solution: 

with recursion, think backwards:  fib values:     3, 2, 1, 1, 0
                                  fib position/n: 4  3  2  1  0
recursive call: how do i get to 3 from 2 and 1? === (n-1) + (n-2)
base case: when should i exit? once i reach the first two positions(and values) of Fib's sequence, 0,1. In this soln, we also incl n==2 bc its val is also 1 

*/

let fib = (n) => {
    if (n < 2) return n;                // we can do this bc when fib n is 1 or 0, the fib value matches each
    //else if (n <= 2) return 1;       
    else return fib(n-1) + fib(n-2);
}

console.log(fib(4));        // 3