class Graph {
  constructor(v) {
    this.V = v; // Number of nodes
    this.adjList = new Array(v); // Adjacency List
    for (let i = 0; i < v; i++) {
      this.adjList[i] = [];
    }
  }

  addEdge(e1, e2) {
    this.adjList[e1].push(e2);
  }

  get edges() {
    return this.adjList;
  }

  bfs(sourceNode) {
    let visited = new Array(this.V);
    for (let x = 0; x < this.V; x++) {
      visited[x] = false;
    }
    let queue = [];
    let explorationSet = [];
    queue.push(sourceNode);
    visited[sourceNode] = true;

    while (queue.length) {
      let node = queue.shift();
      explorationSet.push(node);

      this.adjList[node].forEach((x) => {
        if (!visited[x]) {
          queue.push(x);
          visited[x] = true;
        }
      });
    }
    return explorationSet;
  }

  isCyclicBfs(sourceNode) {
    let visitedNode = {};
    for (let x = 0; x < this.V; x++) {
      visitedNode[x] = null;
    }
    let queue = [];
    queue.push([sourceNode, -1]);
    let i = 0;
    let isCyclic = false;
    while (queue.length && i < 100) {
      let elem = queue.shift();
      console.log(1, elem);
      let adjList = this.adjList[elem[0]];
      console.log(2, adjList);
      for (let x = 0; x < adjList.length; x++) {
        
        if (visitedNode[adjList[x]] !== null && adjList[x] !== elem[0]) {
          isCyclic = true;
          break;
        }
        visitedNode[x] = elem[0];
        queue.push([adjList[x], elem[0]]);
      }
      i++;
    }
    return isCyclic;
  }

  dfs(sourceNode) {
    let stack = [];
    var visited = new Set();
    stack.unshift(sourceNode);
    visited.add(sourceNode);
  }
}

let graph1 = new Graph(6);
graph1.addEdge(0, 1);
graph1.addEdge(0, 2);
graph1.addEdge(1, 4);
graph1.addEdge(1, 5);
graph1.addEdge(2, 0);
graph1.addEdge(2, 3);
graph1.addEdge(3, 4);

let edges = graph1.edges;
// console.log('BFS', graph1.bfs(2));
// console.log('DFS', graph1.dfs(2));
console.log('isCyclicBfs', graph1.isCyclicBfs(1));
