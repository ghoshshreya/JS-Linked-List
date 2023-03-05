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
          stack.unshift(x);
        }
      });
    }
    return Array.from(visistedQueue);
  }

  bfs(source) {
    let visistedQueue = {};
    let stack = [];
    stack.push(source);
    let i = 0;
    while (stack.length) {
      let elem = stack.pop();
      visistedQueue.add(elem);
      this.adjList[elem].forEach((x) => {
        if (!visistedQueue.has(x)) {
          stack.unshift(x);
        }
      });
    }
    return Array.from(visistedQueue);
  }

  isCyclic_dfs(source) {
    let visitedQueue = {};
    for (let x = 0; x < this.V; x++) {
      visitedQueue[x] = null;
    }
    const queue = [];
    queue.push([source, -1]);
    visitedQueue[source] = -1;
    let i = 0;
    while (queue.length) {
      let elem = queue.pop();
      visitedQueue[elem[0]] = elem[1];

      console.log(visitedQueue);
      this.adjList[elem[0]].forEach((x) => {
        console.log(x);
        if (visitedQueue[x] !== null && visitedQueue[x] !== elem) {
          return true;
        } else if (visitedQueue[x] === null) {
          queue.push([x, elem[0]]);
        }
        // console.log(x, elem[0]);
      });
      i++;
      if (i > 100) {
        break;
      }
    }
    return false;
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
console.log(graph.dfs(2));
console.log(graph.isCyclic_dfs(0));
