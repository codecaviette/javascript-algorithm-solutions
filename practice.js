// To run code, enter "node practice.js" into terminal
// Code may not return value; instead, use console.log to view result

/*
Example Input: [-1, 2, 3, 1, -3, 2]
Subarray Size: 2

find max sum of subarray w length of 2
sliding window approach

track: leftIndex, rightIndex, currSum, maxSum (in this case, left and right start at 0)
while rightIndex is less than array length (we want to stop calculating when the rightIndex reaches end of array
  ... while always keeps track of which index you want to track/will iterate the most times)
  calculate the sum of left and right indices === currSum
  compare currSum and maxSum and assign larger value to maxSum
  increment both left and right to loop again
  while loop will exit once right is no longer less than array.length

*/      

function findMaxSum(arr) {
  let leftIndex = 0,
      rightIndex = 1,
      maxSum = 0;

  while (rightIndex < arr.length) {
    let currSum = arr[leftIndex] + arr[rightIndex];
    maxSum = Math.max(maxSum, currSum);
    leftIndex++;
    rightIndex++;
  }
  console.log(maxSum);



  // let maxSum = 0;
  
  // for (let i = 0; i < arr.length-1; i++) {
  //   let currSum = arr[i] + arr[i+1];
  //   maxSum = Math.max(maxSum, currSum);
  // }
  // console.log(maxSum);

}

findMaxSum([2,4,6,8]);





