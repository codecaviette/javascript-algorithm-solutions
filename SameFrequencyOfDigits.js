/*
Given two positive integers, find out if the two numbers have the same frequency of digits. 

Your solution must be in O(n) time complexity.
*/

// Use frequency counter pattern

function sameFrequency(num1, num2){
    // convert both nums to strings so we can iterate through and add to objects
    let str1 = num1.toString(), 
        str2 = num2.toString();

    if (str1.length != str2.length) return false;
            
    // for each string, add number as key and count as value
    let frequency1 = {},
        frequency2 = {};
    
    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i];
        frequency1[digit] ? frequency1[digit]++ : frequency1[digit] = 1; 
    }
    for (let i = 0; i < str2.length; i++) {
        let digit = str2[i];
        frequency2[digit] ? frequency2[digit]++ : frequency2[digit] = 1; 
    }

    // compare objects, if ever they do not match, return false
    for (let [digit, count] of Object.entries(frequency1)) {
        if (!frequency2[digit]) return false;
        if (frequency2[digit] != count) return false;
    }
    // else return true
    return true;

}

sameFrequency(121, 211);
sameFrequency(12, 211);
sameFrequency(4544, 5444);