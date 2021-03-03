/**********************************
Coding Challenge: Given a value, insert it into a binary search tree. 
*/

/**********************************
Solution:
*/
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
        this.count = 0;                   
    }

    insert(value) {                       
        let newNode = new Node(value);         // since we're inserting a new node (object) into the tree, we nd to first create the new node by using the keyword "new" which creates an instance of Node class

        const searchTree = node => {           // this arrow fxn looks at an existing node in tree
            if (value < node.value) {          // if value < node.value, go left
                if (!node.left) {              // if no left child, append new node
                    node.left = newNode;
                }
                else {                         // if left child exists, look left again except this time w left node
                    searchTree(node.left);     // this is the recursion piece (fxn calling itself)
                }
            }

            else if (value > node.value) {     // if value > node.value, go right
                if (!node.right) {             // if no right child node, append new node
                    node.right = newNode;
                }
                else {                         // if right child exists, look right again except this time w right child
                    searchTree(node.right);    // recursion
                }
            }
        }
        searchTree(this.root);
    }}