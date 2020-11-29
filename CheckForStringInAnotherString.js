/*
Coding challenge: 
    Mutations - Check if string includes another string  
    - Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
    - For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    - The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
*/

/*
Solution:
*/

function mutation(arr) {                                                    1.
    //convert strings to array to compare the 2 elements                    2.
    //convert to lowercase so case is not a factor                          3.
    //check if characters in 2nd element are included in 1st element        4.
        //loop thru elements of 2nd element                                 5.

    let firstItem = arr[0].toLowerCase().split("");                         6.
    let secondItem = arr[1].toLowerCase().split("");                        7.

    for (let i = 0; i < secondItem.length; i++) {                           8.
        if (firstItem.indexOf(secondItem[i]) < 0 ) return false;            9.
    }
    return true;                                                            10.
}

/*
Explanation:

2.- 5. - First step in solving a challenge: Translate instructions into coding steps
6.- 7. - In the split method, you need to indicate where to split the string into array items. Empty ("") indicates after each letter.
8. - When looping through the elements of the secondItem...
9. - ...if the value of the secondItem's current iteration does NOT exist in firstItem, then it'll return -1 which would then return false.

*/