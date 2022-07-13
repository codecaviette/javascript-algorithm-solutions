/*
Write a function called 'same', which accepts two arrays. The function should return true if every value in the 
array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9])  // true
same([1,2,3], [1,9])    // false
same([1,2,1], [4,4,1])  // false
*/

let same = (arr1, arr2) => {

    let status = true;
    // if array lengths are not the same, return false
    if (arr1.length != arr2.length) return false;

    // create object with arr2's values as keys and counts as values
    let arr2NumCount = {};
    arr2.forEach(num => {
        num in arr2NumCount ? arr2NumCount[num]++ : arr2NumCount[num] = 1;
    });

    // loop arr1
    for (let i = 0; i < arr1.length; i++) {
        // in each iteration, get squared value
        let squared = arr1[i] * arr1[i];
        // if squared value is not in obj, return false
        if (!(squared in arr2NumCount)) {            
             status = false;
        } else {    // if squared value is in obj
            if (arr2NumCount[squared] = 1) {
                delete arr2NumCount[squared];
            } else {
                arr2NumCount[squared]--;
            }
        }
    }
    // return true
    return status;
}

same([1,2,3],[2,3,4]);
same([1,2,3],[4,1,9]);
