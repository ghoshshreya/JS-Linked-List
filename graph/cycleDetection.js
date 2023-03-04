class Graph {
  constructor(v) {
    this.V = v;
    this.adjList = new Array(v);
    this.adjList.fill([]);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
  }

  get edges() {
    return this.adjList;
  }

  detectCycles_bfs() {
    
  }
}

let graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 0);
graph.addEdge(1, 2);
graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 0);
graph.addEdge(3, 2);
graph.addEdge(3, 4);
console.log(graph.edges);
