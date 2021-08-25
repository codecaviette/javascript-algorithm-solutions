/**********************************
Coding Challenge: Given an integer, count down to 1 by logging each integer along the way.

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

let countDownFrom = (num) => {        // A
    // base case
    if (num === 0) return;            // B
  
    // as long as base case is not met, perform this:
    console.log(num);                 // C
    countDownFrom(num - 1);           // D
}
  
countDownFrom(10);                    // E
  