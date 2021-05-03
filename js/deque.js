class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront() {
    if(this.head === null) return null;
    return this.head.data;
  }

  peekBack() {
    if(this.tail === null) return null;
    return this.tail.data;
  }

  enqueueFront(data) {
    if(this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let node = new Node(data);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  enqueueBack(data) {
    if(this.tail === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let node = new Node(data);
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeueFront() {
    if(this.head === null) return null;

    let temp = this.head;
    this.head = this.head.next;
    if(this.head !== null) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return temp.data;
  }

  dequeueBack() {
    if(this.tail === null) return null;

    let temp = this.tail;
    this.tail = this.tail.prev;
    if(this.tail !== null) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return temp.data;
  }
}

function getMax(arr) {
  // デックを作成する
  let deque = new Deque();
  deque.enqueueFront(arr[0]);
  // リストをループして、最大値を更新した時だけキューの先頭に入れていく
  for(let i = 1; i < arr.length; i++) {
    if(deque.peekFront() < arr[i]) {
      deque.enqueueFront(arr[i]);
    } else {
      deque.enqueueBack(arr[i]);
    }
  }
  return deque.peekFront();
}

console.log(getMax([34,35,64,34,10,2,14,5,353,23,35,63,23]));//353
