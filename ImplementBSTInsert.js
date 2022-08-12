class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class BST {
    constructor() {
      this.root = null;
    }
    insert(val) {
      // create new node to insert
      let newNode = new Node(val);
  
      // create helper fxn w params: val, curr node
      const traverse = (value, curr) => {
        // edge: if current node is empty, set it equal to newNode and return this tree
        if (curr == null) {
          curr = newNode;
          return this;
        }
        // recursive: if val > current node's value, go to right child and call recursive fxn on right child
        if (value > curr.value) {
          return traverse(value, curr.right);
        // else, do same w left child 
        } else {
          return traverse(value, curr.left);
        }
      }
      // call helper fxn w val and root
      return traverse(val, this.root);
    }
  }
  
  
  let myBST = new BST();
  myBST.insert(5);
  myBST.insert(10);
  console.log(myBST)