class Graph {
  constructor(v) {
    this.V = v;
    this.adjList = new Array(v);
    for (let x = 0; x < this.adjList.length; x++) {
      this.adjList[x] = [];
    }
  }

  //undirected
  addEdge_undirected(u, v) {
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }

  dfs(source) {
    let visistedQueue = new Set();
    let stack = [];
    stack.push(source);
    let i = 0;
    while (stack.length) {
      let elem = stack.pop();
      visistedQueue.add(elem);
      this.adjList[elem].forEach((x) => {
        if (!visistedQueue.has(x)) {
          console.log(visistedQueue);
          stack.unshift(x);
        }
      });

      i++;
      if (i > 10) {
        break;
      }
    }
    return Array.from(visistedQueue);
  }

  get edges() {
    return this.adjList;
  }
}

let graph = new Graph(4);
graph.addEdge_undirected(0, 1);
graph.addEdge_undirected(1, 2);
graph.addEdge_undirected(1, 3);
graph.addEdge_undirected(2, 3);

console.log(graph.edges);
graph.dfs(0);
