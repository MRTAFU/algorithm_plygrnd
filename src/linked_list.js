const { performance } = require('perf_hooks');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 連結リスト
class LinkedList {
  constructor() {
    this.head = null;
  }
  // push content to the end
  push(value) {
    const node = new LinkedListNode(value);
    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }

  // add content to the beginning
  unshift(value) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
  }

  // stringify
  toString() {
    const array = [];

    let current = this.head;
    while(current) {
      array.push(current.value);
      current = current.next;
    }

    return array.toString();
  }
}

// const list = new LinkedList();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// console.log(list.toString());


// function to measure the time of func function executed 100 times
const measureTime = (func) => {
  const startTime = performance.now(); // start time
  for(let i = 0; i < 100; i++) {
    func();
  }
  const endTime = performance.now(); // end time
  const elapsedTiime = endTime - startTime; // passed time
  return elapsedTiime;
};


// push value at the end of an array
const arrayPush = () => {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    array.push(i);
  }
};

// add value at the start of an array
const arrayUnshift = () => {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    array.unshift(i);
  }
};

// push value at the end of a linked list
const linkedListPush = () => {
  const list = new LinkedList();
  for (let i = 0; i < 1000; i++) {
    list.push(i);
  }
};

// add value at the start of a linked list
const linkedListUnshift = () => {
  const list = new LinkedList();
  for (let i = 0; i < 1000; i++) {
    list.unshift(i);
  }
};

// calculate each execution time
const arrayPushTime = measureTime(arrayPush);
const arrayUnshiftTime = measureTime(arrayUnshift);
const linkedListPushTime = measureTime(linkedListPush);
const linkedListUnshiftTime = measureTime(linkedListUnshift);

// show result
console.log(`Array.push         ${arrayPushTime.toFixed(2).padStart(10)}`);
console.log(`Array.unshift      ${arrayUnshiftTime.toFixed(2).padStart(10)}`);
console.log(`LinkedList.push    ${linkedListPushTime.toFixed(2).padStart(10)}`);
console.log(`LinkedList.unshift ${linkedListUnshiftTime.toFixed(2).padStart(10)}`);
