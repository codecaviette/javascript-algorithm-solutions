/*
Calculate the sum of elements of an array of numbers
input: arr = [1, 3, 5, 7]
output: 16

// iterative soln:
  sum = 0
  looop thru array
    sum += arr[i]
    return sum

// recursive soln:
  thinking backwards and breaking into subproblem: we're starting at last array item and adding it to the rest of the array
  believe with all your might that the recursive call will work on the "rest of the array"

  base case: w each recursive call, arr is getting smaller so once array length is 1, return arr[0]
  recursive section: last array item + the rest of the array 
                    arr[arr.length-1] + recursiveFxn(arr.slice(0,-1))

*/

let recursive = (arr) => {
  if (arr.length == 1) return arr[0];
  else return arr[arr.length-1] + recursive(arr.slice(0,-1));
}

console.log(recursive([1, 3, 5, 7]));
