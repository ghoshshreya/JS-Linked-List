class Graph {
  constructor(v) {
    this.V = v;
    this.adjList = new Array(v);
    for (let x of this.adjList) {
      x = [];
    }

    console.log(this.adjList);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
  }

  get edges() {
    return this.adjList;
  }
}

let graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 6);
graph.addEdge(3, 4);

console.log(graph.edges);
