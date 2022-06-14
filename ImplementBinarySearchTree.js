class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        // create new node with class Node
        // edge case of first node in tree
            // this.root = value
        // otherwise, traverse tree using while loop, always starting w root node
            // declare currNode initially set to root node, which will move based on below decision tree; each time currNode is moved, loop thru presenting same decisions on new currNode
            // if value < val of currNode
                // and if currNode does not have left child, set left child to be newNode, exit loop
                // otherwise, if currNode DOES have left child, move currNode down to left child, iterate thru while loop 
            // if val > val of currNode
                // and if currNode doesnt have right child, set right child to be newNode, exit loop
                // if currNod does have right child, move currNode down to right child and iterate thru while loop again 
        let newNode = new Node(value);

        if (!this.root) this.root = newNode;

        while(true) {                           // must be careful with this condition so as to not loop infinitely-- nd exit stmts within
            let currNode = this.root;               
            if (value < currNode.val) {
                if (!currNode.left) {
                    currNode.left = newNode;
                    return this;                // to exit loop so doesnt loop infinitly
                } else {
                    currNode = currNode.left;
                }
            } else {
                if (!currNode.right) {
                    currNode.right = newNode;
                    return this;
                } else {
                    currNode = currNode.right;
                }
            }
        }
    
    }
    lookup(value) {
        // check for empty root node, in which case return false
        // traverse tree using while loop 
            // start by declaring currNode = root node
            // if value < val of currNode
                // move currNode to the left child (currNode = currNode.left)
            // if value > currNode.val
                // move currNode to right child (currNode = currNode.right)
            // if value == currNode.val
                // we've found out value! return true
        // once we've touched all nodes and have not found our value, return false

        if (!this.root) return false;

        let curr = this.root;
        while(curr) {
            if (value < curr.val) {
                curr = curr.left;
            } else if (value > curr.val) {
                curr = curr.right;
            } else if (value === curr.val) {
                return true;
            }
        }
        return false;
    }
    // remove(value) {
        // super complex!
    // }
    breadthFirstSearch() {
        // use queue to keep track of children of nodes we've visited 
        // so we know where to visit next (next level and in correct order l-r)
        let currentNode = this.root;        // always start at root node
        let list = [];                      // array we'll return w nodes in BFS order
        let queue = [];                     // allows us to keep track of children so we know what node to process next
        queue.push(currentNode);            // start w processing root node
    
        while (queue.length > 0) {          // as long as the queue is not empty, ie as long as there are nodes left to process
            currentNode = queue.shift();    // process first item in queue by popping from queue...
            list.push(currentNode.value);   // ... and adding it to list
            if (currentNode.left) {             // if popped node has any children, add them to queue
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;                        // finally, return list
    }
}

let myTree = new BinarySearchTree();
myTree.insert(5);
myTree.lookup(5);

console.log(myTree.lookup(5));