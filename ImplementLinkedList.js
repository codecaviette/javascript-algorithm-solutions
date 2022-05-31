class LinkedList {
    constructor(value) {		// constructor FXN runs every time class is instantiated; use ‘this’ keyword which refers to instance
        this.head = {		    // head OBJECT created; notice obj property syntax used within (ie. “:” rather than “=” )
            value: value, 
            next: null
        };
        this.tail = this.head;
        this.length = 1;		// when class is instantiated, we pass it a number which will create [value of] first node
    }
    append(value) {
        // create new node object, add node to tail by updating tail pointer then tail val
        const newNode = {		
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;			// return our linked list
    } 
    prepend(value){
        // create new node, add node infront of head by updating head.next then head value
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {			// as long as the current node does not equal null/past tail node
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(position, value) {
        // create new node to insert
        // loop thru (always starting at head); when find position-1, insert newNode 
            // if currentPos equals position-1, insert newNode by updating newNode.next to point to currentNode.next and currentNode.next point to newNode
            // otherwise, keep going 
                // at end of each iteration, move currentPos and currentNode forward by incrementing currentPos and updating currentNode to currentNode.next
        // increment length
        // return this
        let currentNode = this.head;
        let currentPosition = 0;
        const newNode = {
            value: value,
            next: null
        }

        while (currentNode !== null) {
            if (currentPosition == (position - 1)) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            currentPosition++;
            currentNode = currentNode.next;
        }
        this.length++;
        return this;
    }   	
}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.insert(1,5);
myLinkedList.printList()
console.log(myLinkedList.printList());

    