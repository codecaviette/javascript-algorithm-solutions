// Prompt: Find the minimum/smallest value in a binary search tree. 

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
    }

    min() {                                       // traverse tree only going left to get to smallest node value
        let currentNode = this.root;              // declare variable so we keep track of which node we're looking at

        while (currentNode.left) {                // as long as there's a left child node
            currentNode = currentNode.left;       // set current node equal to its child left node, repeatedly
        }
        return currentNode.value;           // once there's no more left children, while loop exits, & return val of currentNode
    }}