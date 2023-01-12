class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = this.length + 1;
  }

  traverse() {
    console.log('/*----------Current List Values---------*/');
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log('Length of List :: ', this.length);
  }

  pop() {
    let currentNode = this.head;
    let newTail = currentNode;
    if (!this.head) return undefined; // IF THERE ARE NO NODES IN THE LIST
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // IF THERES' ONLY ONE NODE
      this.head = this.tail = null;
      this.length = 0;
    }
    return currentNode;
  }

  // REMOVE NODE FROM STARTING OF THE LIST
  shift() {
    if (!this.head) return undefined;
    let previousHead = this.head;
    this.head = previousHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return previousHead;
  }

  // ADD NODE TO THE BEGINNIG OF THE LIST
  unshift(val) {
    const newNode = new Node(val);
    console.log(newNode);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // FETCHES ELEMENT AT A PARTICULAR INDEX (INDEX STARTS FROM 0)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentElem = this.head;
    while (counter !== index) {
      currentElem = currentElem.next;
      counter++;
    }
    return currentElem;
  }

  // SETS VALUE AT A PARTICULAR INDEX
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // INSERTS A NEW NODE AT SPECIFIED POSITION
  insert(index, val) {
    // const newNode = new Node(val);
    // if (index < 0 && index > length) return null;
    // // If element is to be inserted at the first position
    // if (index === 0) return this.unshift(val);
    // // If element is to be inserted at the end position
    // if (index === this.length) return this.push(val);
    // let prevNode = this.get(index - 1);
    // let currentNode = this.get(index);
    // prevNode.next = newNode;
    // newNode.next = currentNode;
  }
}

var list = new SinglyLinkedList();
// list.push('Value 1');
// list.push('Value 2');
// list.push('Value 3');

// list.traverse();
// console.log('____________');
// console.log('Removed Element :: ', list.pop());
// list.traverse();
// console.log('____________');
// console.log('Shifted Element :: ', list.shift());
// list.traverse();
// console.log('____________');
// console.log('Shifted Element :: ', list.unshift('Value 4'));
// list.traverse();

// console.log('Setting New Value at node', 2, list.set(2, 'New Value 4'));
// list.traverse();

console.log('Inserting New Node at Position', 0, list.insert(1, 'New Value 4'));
list.traverse();
