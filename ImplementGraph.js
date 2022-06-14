class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        // add as obj/adjacentList key
        // increment number of nodes
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        //undirected graph
        // find node1 as key and add node2 to value's array; and vice versa
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    
}

let myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addEdge(1,2);
console.log(myGraph);,2);
console.log(myGraph);