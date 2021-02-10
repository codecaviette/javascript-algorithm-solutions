// Prompt: Check to see if value exists in a binary search tree. 

// Solution:
class Node {                            
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = new Node(value);
        this.count = 0;                   // This will keep track of the # of nodes in the tree
    }

    contains(value) {                    // contains method takes a value and sees if it exists in tree
        let currentNode = this.root;     // declare variable to keep track of where we are in tree; start at root

        while (currentNode) {            // as long as the currentNode is true/exists, execute this block of code
            if (value === currentNode.value) {    // if the value passed into fxn equals the current node's value, rtn true
                return true;
            }
            if (value < currentNode.value) {      // if value passed in is less than the current node's value...
                currentNode = currentNode.left;   // ... set currentNode equal to the left child node & run loop again
            } else {                              // otherwise, if value is greater than current node's value...
                currentNode = currentNode.right;  // ... set currentNode equal to the right child & run loop again
            }
        }
        return false;                     // if the value does not exist in the tree at all, return false

    }
}