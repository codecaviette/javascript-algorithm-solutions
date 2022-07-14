/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as 'cinema', formed from 'iceman'.
*/

let validAnagram = (str1, str2) => {
    // if string lengths do not match, they cannot be anagrams, so return false
    if (str1.length != str2.length) return false;

    // create an object of each string's characters and their counts
    let str1CharCount = {};
    let str2CharCount = {};

    for (let char of str1) {
        char in str1CharCount ? str1CharCount[char]++ : str1CharCount[char] = 1;
    }
    for (let char of str2) {
        char in str2CharCount ? str2CharCount[char]++ : str2CharCount[char] = 1;
    }

    // compare each object's key:value pairs, and if there's ever not a match, return false
    for (let [key,value] of Object.entries(str1CharCount)) {
        if (!(str2CharCount[key])) return false;
        if (str2CharCount[key] && (str2CharCount[key] != value)) return false;
    }

    // otherwise, return true
    return true;
}

/*
TC: O(n) == bc O(n) for each of the 3 for loops which reduces to O(n)
SC: O(n) == bc O(n) for each of the 2 charcount objects which reduces to O(n)
*/

// validAnagram('abo','baa');  // false
// validAnagram('aaa','aaa');  // true
// validAnagram('ten','net');  // true

const testCases = [
    {
      args:('abo','baa'),
      expected: false
    },
  
    {
      args: ('aaa','aaa'),
      expected: true
    },
  
    // third test case and expected result, etc
  ]
  
  testCases.forEach((testCase, idx) => {
    // destructuring assignment
    [str1, str2] = testCase.args;
    const got = validAnagram(str1, str2);
    // NOTE: must use `JSON.stringify` to do array equality checks
    if (JSON.stringify(got) != JSON.stringify(testCase.expected)) {
      const errorMsg = [
        `test case ${idx + 1} FAILED`,
        '-----',
        `GOT:\n\t${got}`,
        '\n',
        `EXPECTED:\n\t${testCase.expected}`,
        '\n\n'
      ]
      console.error(errorMsg.join('\n'));
    }
  })