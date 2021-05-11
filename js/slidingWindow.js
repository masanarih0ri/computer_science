class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
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
    if(this.head === null) {
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

function getMaxWindows(arr, k) {
  if(arr.length < k) return [];
  let deque = new Deque();
  let results = [];
  // ウィンドウを初期化
  for(let i = 0; i < k; i++) {
    while(deque.peekBack() !== null && arr[deque.peekBack()] <= arr[i]) {
      deque.dequeueBack();
    }
    deque.enqueueBack(i);
  }
  // ウィンドウを動かし、最大値を配列に挿入する
  for(let i = k; i < arr.length; i++) {
    results.push(arr[deque.peekFront()]);
    // そもそもウィンドウに入らない場合は削除する
    while(deque.peekFront() !== null && deque.peekFront() <= i - k) {
      deque.dequeueFront();
    }

    while(deque.peekBack() !== null && arr[deque.peekBack()] <= arr[i]) {
      deque.dequeueBack();
    }
    deque.enqueueBack(i);
  }
  results.push(arr[deque.peekFront()]);
  return results;
}

console.log(getMaxWindows([34,35,64,34,10,2,14,5,353,23,35,63,23], 4)); //[64, 64, 64, 34, 14, 353, 353, 353, 353, 63]