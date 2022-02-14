/**********************************
Coding challenge:
Given an integer, count down to 1 by logging each integer along the way.

Ex -  Input: 10
      Output:   // 10
                // 9
                // 8
                // ...
                // 1
*/

/**********************************
Solution:
*/
let countDownFrom = (num) => {        A
    // base case
    if (num === 0) return;            B
  
    // as long as base case is not met, perform this:
    console.log(num);                 C
    countDownFrom(num - 1);           D
  }
  
  countDownFrom(10);                  E

/*
Thought process:
1. Line E calls the function defined in line A, which runs the function. Currently, num equals 10
2. Go to line B. Because 10 does not equal 0, continue to line C which logs "10"
3. Continue to line D which is the recursive function but now, the argument is 10-1 or 9
4. This takes us back to line A, and this time, num equals 9
5. Continue this loop until line B (base case) is met, at which point the recursive loop exits and returns nothing for that iteration.
*/

/* Big O time: O(n)?
   Big O space:
*/