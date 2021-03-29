/**********************************
Coding Challenge: 
    let str = “aabcaa”;
    On run time, write a fxn to get alphabetical order and # times it appears:  let str = “a4b2c1"
*/

/**********************************
Solution (90% complete - UNABLE TO FIGURE OUT HOW TO CONVERT OBJ TO STR)
*/

//1. Pseudocode:
    // split string into array so can manipulate
    // order it alphabetically
    // loop through array and add item as a key to an object while counting occurance in its value
    // convert object key:value pairs as string

//2. Code:

let str = "aabcaa";

let finalStr = function(str) {

let obj = {};
let array = str.split("").sort();

for (let i=0; i< array.length; i++) {
    let char = array[i];
    if (!obj.hasOwnProperty(char)) {    // if object doesn't have array[i] as a prop...
    obj[char] = 1;                    // ...then add array[i] as a key with value of 1
    } else {                        
    obj[char] = obj[char] + 1;        // ...otherwise, increase the value of that existing key by 1    
    }
}
return obj;                           // end result: {a:4, b:1, c:1} >> UNABLE TO FIGURE OUT HOW TO CONVERT OBJ TO STR (toString and String didn't work)
};

finalStr(str);
