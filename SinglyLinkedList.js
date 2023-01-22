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

function generateListFromArray(arr) {
  let ll = {
    val: null,
    next: null,
  };
  let tail = null;
  for (let x of arr) {
    if (ll.val === null) {
      ll.val = x;
      tail = ll;
    } else {
      let newNode = {
        val: x,
        next: null,
      };
      tail.next = newNode;
      tail = newNode;
    }
  }
  return ll;
}

let l1 = generateListFromArray([6, 4, 5, 0, 4, 4, 9, 4, 1]);
let l2 = generateListFromArray([3, 8, 8, 0, 3, 0, 1, 4, 8]);

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let node = new Node(null);
  let tail = node;
  while (l1?.val >= 0 || l2?.val >= 0) {
    let sum = (l1 && l1.val ? l1.val : 0) + (l2 && l2.val ? l2.val : 0) + carry;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    } else carry = 0;
    if (node.val === null) {
      node.val = sum;
      tail = node;
    } else {
      let newNode = new Node(sum);
      tail.next = newNode;
      tail = newNode;
    }
    console.log(l1);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry) {
    let newNode = new Node(carry);
    tail.next = newNode;
    tail = newNode;
  }
  return node;
};

console.log(addTwoNumbers(l1, l2));
