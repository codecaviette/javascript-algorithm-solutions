/*
Coding challenge: 
Reverse an integer.

Ex:  x = 32243
     Expected output: 34223
*/
    

// Solution:
    
function reverseNumber(num) {
    num = num + "";                                  //  1. (see Explanation below)
    return num.split("").reverse().join("");         //  2. (see Explanation below)
}
console.log(reverseNumber(32243));


/*
Explanation:

1. num = num + "";  
    Convert the *number* to a *string*. There are other ways to do this; one way is using toString -> str = num.toString();   // str and num cannot be the same variable name, in contrast to what we used (num = num + "";)

2. return num.split("").reverse().join("");
    - The split() string method is used to *split the newly-created string* object into an *array of substrings* by separating after each character.
    Code : console.log('1000'.split(""));
    Output : ["1", "0", "0", "0"]

    - The reverse() method is used to *reverse an array* in place. The first array element becomes the last and the last becomes the first.
    Code : console.log(["1", "0", "0", "0"].reverse());
    Output : ["0", "0", "0", "1"]

    - The join() method is used to *join* all elements of an array into a string. The ("") joins the array of substrings by nothing. If you had (" ") then they'd be joined by a space.
    Code : console.log(["1", "0", "0", "0"].reverse().join(""));
    Output : "0001"

*/