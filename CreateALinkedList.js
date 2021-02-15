/**********************************
Coding Challenge: 
    Create a linked list using ES6. 
*/

/**********************************
Solution:
*/
class LinkedList {
    constructor() {
        this.head = null;       // When instantiated, this IDs the head/entry point to LL
    }
    add(data) {                 
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}

const linkedList = new LinkedList();    // Instantiate an object from LinkedList class

linkedList.add(3);        // Need to subsequently call add fxn to add nodes to LL 
linkedList.add(2);
linkedList.add(1);

console.log(linkedList);    // Output:   linkedList {  
                            //              head: Node { data: 1, next: Node {data:2, next: Node {data: 3, next: null }}}
