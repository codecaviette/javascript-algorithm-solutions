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
*/  

// calculate number of bottles you can buy if you have $10 and each bottle is $1.5
/*
function buyMilk(allowance, pricePerBottle) {

  console.log("buy" + Math.floor(allowance/pricePerBottle) + "bottles");
}

buyMilk(10, 1.5);
*/

/*
var a = 1000;
function foo() {
    var a = 1001
    function bar(){
      a++; 
      var a = 1010; 
      console.log(a)
    }
    bar();
  }
  foo();
*/
/*
const num1 = function(foo = 110, bar = 201 ) {
  return foo + bar;
}
console.log(num1());

const num2 = ([foo, bar] = [110, 201]) => foo + bar;
console.log(num2());
*/
/*
var foo = new Promise((resolve, reject) => {
  reject(Error('Send help sos!'))
})
foo.catch(error => console.log(error.message))
foo.catch(error => console.log(error.message))
*/

/*

Promise.resolve('200!')
  .then(() => {
    throw Error('Help!')
  })
  .catch(error => {
    return 'success'
  })
  .then(data => {
    throw Error('Data has failed!')
  })
  .catch(error => console.log(error.message))
  */

  /*
(function immediateFoo(foo) {
  return (function immediateBar(bar) {
    console.log(foo);
  }) (25);
}) (40);

*/
/*
var foo = 101; 
function func1() {
  return function() {
    console.log(foo);
  }
  var foo = 202;
}
var func2 = func1();
func2();


// Function to count the number of inversions
    // during the merge process

    
    function mergeAndCount(arr,l,m,r)
    {
     
        // Left subarray
        let left = [];
        for(let i = l; i < m + 1; i++)
        {
            left.push(arr[i]);
             
        }
         
        // Right subarray
        let right = [];
        for(let i = m + 1; i < r + 1; i++)
        {
            right.push(arr[i]);
        }
        let i = 0, j = 0, k = l, swaps = 0;
        while (i < left.length && j < right.length)
        {
            if (left[i] <= right[j])
            {
                arr[k++] = left[i++];
            }
            else
            {
                arr[k++] = right[j++];
                swaps += (m + 1) - (l + i);
            }
        }
        while (i < left.length)
        {
            arr[k++] = left[i++];
        }
        while (j < right.length)
        {
            arr[k++] = right[j++];
        }
        return swaps;
    }
     
    // Merge sort function
    function mergeSortAndCount(arr, l, r)
    {
         
        // Keeps track of the inversion count at a
        // particular node of the recursion tree
        let count = 0;
        if (l < r)
        {
            let m = Math.floor((l + r) / 2);
             
            // Total inversion count = left subarray count
            // + right subarray count + merge count
             
            // Left subarray count
            count += mergeSortAndCount(arr, l, m);
             
            // Right subarray count
            count += mergeSortAndCount(arr, m + 1, r);
             
            // Merge count
            count += mergeAndCount(arr, l, m, r);
        }
        return count;
    }   


// Calculate the sum of natural number up to n
    n = 5
    output: 15 == 1 + 2 + 3 + 4 + 5

    thinking backwards:
    5+4+3+2+1
    recursive: one step: 5+4 == n + (n-1)
    base: when n == 1, return 1


let sumUpToN = (n) => {
  if (n == 1) return 1;
  else return n + sumUpToN(n-1);
}

console.log(sumUpToN(5));


// Calculate factorial of n. Reminder n! = 1 * 2 * ... * n
// recursive solution:
n = 5 == 5*4*3*2*1
think backwards
rec: 5*4 == n * (n-1)
base: when n = 1 return 1

let factorial = (n) => {
  if (n == 1) return 1;
  else return n * factorial(n-1);
}

console.log(factorial(3))

//iterative for loop:
loop thru 1 to n
set sum var == 1
each time, multiply sum by n
increase i by 1

let sum = 1;
let factorial = (n) => {
  for (let i=1; i<=n; i++) {
    sum *= i;

  }
return sum;
}

// iterative while loop 
let sum = 1,
    i = 1;

let factorial = (n) => {
  while (i<=n) {
    sum *= i;
    i++;
}
  return sum;
}

console.log(factorial(3))

//Calculate the value of n to the m power
n = 2, m = 3
result = 2^3 == 2*2*2

thinking recursively == backwards - in this case dn matter cause all values are tehe same
recursive soln: 2*2 == n*n == n^(m-1)
base: once m==0, return 1

**ND TO CIRCLE BACK**

let powN = (n, m) => {
  if (m==1) return n;
  else return n * powN(n, m-1);
}

console.log(powN(2, 3));

//Calculate the sum of elements of an array of numbers
input: arr = [1, 3, 5, 7]
output: 16

// iterative
  sum = 0
  looop thru array
    sum += arr[i]
    return sum

// recursive
  thinking backwards and breaking into subproblem: we're starting at last array item and adding it to the rest of the array
  believe with all your might that the recursive call will work on the "rest of the array"

  base case: w each recursive call, arr is getting smaller so once array length is 1, return arr[0]
  recursive section: last array item + the rest of the array 
                    arr[arr.length-1] + recursiveFxn(arr.slice(0,-1))



let recursive = (arr) => {
  if (arr.length == 1) return arr[0];
  else return arr[arr.length-1] + recursive(arr.slice(0,-1));
}

console.log(recursive([1, 3, 5, 7]));

// Given a string, return true if it is a palindrome and false if it is not. Use recursion.
ex. kayak

// subroblem: check first and last characters to see if they match, then check the rest of characters (recursive call)
// rest of characters is getting smaller, so exit once we have 1 char or 0 chars (this takes care of even and odd number of characters)
  // 0 and 1 chars are palindromes, so return true
// otherwise, return false



let isPalindrome = (string) => {
  
  if (string.length == 1 ||  string.length == 0) return true;

  if (string.charAt(0) == string.charAt(string.length-1)) {
    return isPalindrome(string.substring(1, string.length-1));
  }

  return false;

}

console.log(isPalindrome('kayaaak'));
 


Implement queue that adds node, removes node, peeks at first node, returns length
  Queue is FIFO == add node to end, remove from beginning
    Use linked list bc better time complexity than array when removing from beginning
  Will need: class Node + class Queue
    Node creates new node objects - needs value and pointer
    Queue creates the new queue object that we made edits to - needs first node, last node, length


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  } 
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    // create new node to add 
    // if queue is empty, set first and last item, no pointers needed since only 1 node 
    // otherwise, add to node to end of queue, but first update last pointer
    // incr length
    // return queue

    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // remove first item, move first position to second item, decr length
      // if queue is empty, return null
      // if queue has 1 node, the new queue will be empty; return null
      // otherwise, this.first = this.first.next
      // decr length
    if (this.length == 0) return null;
    if (this.length == 1)  {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

}


// queue == node + queue classes 
  // node: value, pointer
  // queue: head, tail, length

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  peek() {
    return this.head;
  }
  enqueue(value) {
    // create new node to add
    // tail.next will point to new node
    // tail wll become new node
    // length++
    /// return new queue

    const newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }
  dequeue(){
    // if length == 0, return null
    // if length == 1, tail == null
    // everything else, head moves back
    // length --

    if (this.length == 0) return null;

    if (this.length == 1) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return this;

  }
}
// implement stack using array - LIFO
// define class Stack as blueprint 

*/

class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    this.stack.pop();
    return this;
  }
  push(value) {
    this.stack.push(value);
    return this;
  }
  isEmpty() {
    if (this.stack.length === 0) return true;
    else return false;
  }
}

let myStack = new Stack();
console.log(myStack.isEmpty());
console.log(myStack.push(5));
console.log(myStack.isEmpty());

















