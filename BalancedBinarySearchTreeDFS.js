
// BST class

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
      let newNode = new Node(val);
  
      // if root is null, set equal to new node
      if (!this.root) {
        this.root = newNode;
        return this
      }
  
      const dfs = (val, curr) => {
        // if val is less than root val, go left
        if (val < curr.value) {
          // if there's no left child, set equal to new node
          if (!curr.left) {
            curr.left = newNode;
            return this;
          } else {
            // otherwise, continue traversing by recursively calling fxn on left child
            dfs(val, curr.left);
          }
          
        } else {
          if (!curr.right) {
            curr.right = newNode;
            return this;
          } else {
            // otherwise, continue traversing by recursively calling fxn on left child
            dfs(val, curr.right);
          }        
        }
  
      }
      dfs(val, this.root);
  
      // do same for right
    }
    find(val) {
      if (!this.root) return false;
      
      const dfs = (val, curr) => {
        if (val == curr.value) {
          return true;
        } else if (val < curr.value) {
          if (!curr.left) {
            return false;
          } else {
            return dfs(val, curr.left);
          }
        } else {
          if (!curr.right) {
            return false;
          } else {
            return dfs(val, curr.right);
          }
        }
      }
      return dfs(val, this.root);
    }
  }
  
  let myBST = new BST();
  myBST.insert(10);
  myBST.insert(5);
  myBST.insert(9);
  myBST.insert(3);
  myBST.insert(2);
  myBST.insert(15);
  
  // myBST.insert(20);
  
  
/* 
Challenge: Determine whether a tree is balanced or not
*/

var isBalanced = function(root) {
    // outside of helper, set status = true
    let status = true;
    
    // use helper fxn to traverse and find height
    const dfs = (curr, height) => {
        if (!curr) return -1;
        let left = dfs(curr.left, height);
        let right = dfs(curr.right, height);
        let diff = Math.abs(left - right);
        if (diff > 1) {
            status = false;
            return;
        }
        return height = Math.max(left, right) + 1;
        
    }
    // call helper
    dfs(root, 0);
    // return status
    return status;
  };
  
  console.log(isBalanced(myBST.root));