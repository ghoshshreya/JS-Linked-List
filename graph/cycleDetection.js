class Graph {
  constructor(v) {
    this.V = v;
    this.adjList = new Array(v);
    for (let i = 0; i < v; i++) {
      this.adjList[i] = [];
    }
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
  }

  get edges() {
    return this.adjList;
  }

  detectCycles_bfs(source) {
    const visitedQueue = [];
    const queue = [source];
    while (queue.length) {
      let root = queue.shift();

      if (!visitedQueue.length) visitedQueue.push([root, -1]);

      this.adjList[root].forEach((x) => {
        let elemExists = false;
        for (let z of visitedQueue) {
          if (z[0] === x) {
            elemExists = true;
            break;
          }
        }

        if (!elemExists) {
          visitedQueue.push([x, root]);
        }

        // if (x !== root) {
        //   queue.push(x);
        // }
      });
    }

    console.log('Hell', visitedQueue);
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

graph.detectCycles_bfs(0);
