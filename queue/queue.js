class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + ' inserted';
  }

  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item + ' deleted';
  }

  peek() {
    return this.items[this.frontIndex];
  }

  get printQueue() {
    return this.items;
  }
}

let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.dequeue();
let str = queue.printQueue;
console.log(str);
