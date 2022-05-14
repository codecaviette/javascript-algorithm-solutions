// implement stack using array - LIFO
// define class Stack as blueprint 


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
