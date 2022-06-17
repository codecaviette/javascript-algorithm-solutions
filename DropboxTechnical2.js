function solution(arr1, arr2) {

    let copyArr1 = [...arr1];                   // better to avoid mutating input, so create copy
    let lowestSum = Infinity;

    for (let i = 0; i < arr1.length; i++) {
        let currSum = 0;
        let removedItem = copyArr1[0];          // better to access (hold in this case) element by index versus method that is mutable (ie. shift())
        copyArr1.shift();
        copyArr1.push(removedItem);
        
        for (let j = 0; j < arr1.length; j++) {
            //console.log(copyArr1[j], arr2[j]);
            let diff = Math.abs(copyArr1[j] - arr2[j]);
            //console.log(diff);
            currSum += diff;
        }
        lowestSum = Math.min(lowestSum, currSum);
        //console.log(lowestSum);

    }
    return lowestSum;
}

let array1 = [1,2,3],
    array2 = [4,5,6],
    array3 = [7,8,9];


console.log(solution(array2, array3));  
