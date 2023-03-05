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
    console.log(this.adjList);
    let visitedNode = {};
    for (let x = 0; x < this.V; x++) {
      visitedNode[x] = false;
    }
    let queue = [];
    queue.push([sourceNode, -1]);
    visitedNode[sourceNode] = 1;
    while (queue.length) {
      let elem = queue.shift();
      visitedNode[elem] = true;
      console.log(elem);
      this.adjList[elem[0]].forEach((x) => {
        if (visitedNode[x]) return true;
        // queue.push([x, elem]);
      });
    }
    return false;
  }

  dfs(sourceNode) {
    let stack = [];
    var visited = new Set();
    stack.unshift(sourceNode);
    visited.add(sourceNode);
    console.log(Array.from(visited));
  }
}

let graph1 = new Graph(4);
graph1.addEdge(0, 1);
graph1.addEdge(0, 2);
graph1.addEdge(1, 2);
graph1.addEdge(2, 0);
graph1.addEdge(2, 3);
graph1.addEdge(3, 3);
let edges = graph1.edges;
console.log('BFS', graph1.bfs(2));
console.log('DFS', graph1.dfs(2));
console.log('isCyclicBfs', graph1.isCyclicBfs(1));
