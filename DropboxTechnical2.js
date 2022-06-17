function solution(arr1, arr2) {

    let copyArr1 = [...arr1];                   // better to avoid mutating input, so create copy
    let lowestSum = Infinity;
    let length = arr1.length;

    for (let i = 0; i < length; i++) {
        let currSum = 0;
        let removedItem = copyArr1[0];          // better to access (hold in this case) element by index versus method that is mutable (ie. shift())
        copyArr1.shift();
        copyArr1.push(removedItem);
        
        for (let j = 0; j < length; j++) {
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
    array3 = [7,2,10],
    array4 = [3,15,33];

console.log(solution(array1, array2)); 
console.log(solution(array2, array3));  
console.log(solution(array3, array4)); 