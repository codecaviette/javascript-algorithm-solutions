// Prompt: Find the maximum/largest value in a binary search tree. 

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

    // max method (find highest value)
        // start at root
        // loop through/traverse tree as long as there's a right child
        // once there's no longer a child, that node's value is the max

    max(){
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }
}