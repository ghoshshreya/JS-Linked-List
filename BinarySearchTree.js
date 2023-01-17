class BinarySearchTree {
  constructor() {
    this.root = null;
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
      if (currentNode.val === val) {
        return currentNode;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      if (!currentNode) {
        return 'Not Found';
      }
    }
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
tree.insert(10);
tree.insert(15);
tree.insert(7);
console.log(tree.findNode(10));
