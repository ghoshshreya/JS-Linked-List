export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  createBst(arr) {
    for (let x of arr) {
      this.insert(x);
    }
    return arr;
  }

  insert(val) {
    let newNode = new Node(val);
    let currNode;
    if (this.root === null) {
      this.root = newNode;
    } else {
      currNode = this.root;
      while (true) {
        if (newNode.val > currNode.val) {
          if (!currNode.right) {
            currNode.right = newNode;
            break;
          } else currNode = currNode.right;
        } else if (newNode.val < currNode.val) {
          if (!currNode.left) {
            currNode.left = newNode;
            break;
          } else {
            currNode = currNode.left;
          }
        }
      }
    }
    return this.root;
  }

  findNode(val) {
    if (!this.root) return 'Empty Tree';
    let currentNode = this.root;
    while (true) {
      if (currentNode.val === val) return currentNode;
      else if (currentNode.val < val) currentNode = currentNode.right;
      else currentNode = currentNode.left;
      if (!currentNode) return 'Not Found';
    }
  }

  breadthFirstSearch() {
    if (this.root) {
      let visited = [];
      let queue = [this.root];
      while (queue.length) {
        let dequeuedElem = queue.shift();
        if (dequeuedElem.left) queue.push(dequeuedElem.left);
        if (dequeuedElem.right) queue.push(dequeuedElem.right);
        visited.push(dequeuedElem.val);
      }
      return visited;
    }
    return 'Empty Tree';
  }

  depthFirstSearchPreOrder() {
    let currNode = this.root;
    let data = [];
    function traverse(currNode) {
      data.push(currNode.val);
      if (currNode.left) traverse(currNode.left);
      if (currNode.right) traverse(currNode.right);
    }
    traverse(currNode);
    return data;
  }

  depthFirstSearchPostOrder() {
    let currNode = this.root;
    let data = [];
    function traverse(currNode) {
      if (currNode.left) traverse(currNode.left);
      if (currNode.right) traverse(currNode.right);
      data.push(currNode.val);
    }
    traverse(currNode);
    return data;
  }

  depthFirstSearchInOrder() {
    let currNode = this.root;
    let data = [];
    function traverse(currNode) {
      if (currNode.left) traverse(currNode.left);
      data.push(currNode.val);
      if (currNode.right) traverse(currNode.right);
    }
    traverse(currNode);
    return data;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
// tree.createBst([10, 6, 15, 20, 8, 3])     ;
// console.log(tree.depthFirstSearchPreOrder());
// console.log(tree.depthFirstSearchPostOrder());
// console.log(tree.depthFirstSearchInOrder());
