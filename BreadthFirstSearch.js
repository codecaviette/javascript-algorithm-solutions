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
        // create new node to be added
        let newNode = new Node(val);
        // if root is empty, set root to equal new node and return root
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let curr = this.root;
        // loop through nodes to find where to insert new node, starting w root
        while (curr) {
        // if val is greater than current node, move to the right child
        if (val > curr.value) {
            // if the right child is empty, set it equal to new node and return root node
            if (!curr.right) {
                curr.right = newNode;
                return this;
            // else, traverse to the right node by setting current node equal to right child
            } else {
                curr = curr.right;    
            }
        // do same for if val is less than current node
        } else if (val < curr.value) {
            if (!curr.left) {
                curr.left = newNode;
                return this;
            } else {
                curr = curr.left;    
            }
            }
        }
    }
}

/* Create BST */
let myBST = new BST();
myBST.insert(10);
myBST.insert(5);
myBST.insert(6);
myBST.insert(3);
myBST.insert(15);
myBST.insert(20);
//console.log(myBST);
  

/** BFS **/
// create queue to keep track of nodes to be processed next
// create visited nodes which we'll return 
let queue = [],
visited = [];
// traverse tree starting w root ofc 
// add root to queue
queue.push(myBST.root);
// as long as queue is not empty...
while (queue.length) {
    // shift 0th item from queue, add it to visited, and add its children to queue
    let beingProcessed = queue.shift();
    visited.push(beingProcessed);
    if (beingProcessed.left) queue.push(beingProcessed.left);
    if (beingProcessed.right) queue.push(beingProcessed.right);
}
// return visited
return visited;