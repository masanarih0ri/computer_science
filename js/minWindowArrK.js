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
      return this.tail.data
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

function minWindowArrK(intArr,k) {
  // 初期のウィンドウを作る（ウィンドウにはindexを格納する）
  let deque = new Deque();
  let result = [];
  for(let i = 0; i < k; i++) {
    while(deque.peekBack() !== null && intArr[deque.peekBack()] > intArr[i]) {
      deque.dequeueFront();
    }
    deque.enqueueBack(i);
  }
  // そのあと、ウィンドウを動かす
  for(let i = k; i < intArr.length; i++) {
    result.push(intArr[deque.peekFront()]);
    // ウィンドウの枠外のものは削除
    while(deque.peekFront() !== null && deque.peekFront() <= i - k) {
      deque.dequeueFront();
    }
    // ウィンドウの枠内で、新しい数値よりも大きいものは削除
    while(deque.peekBack() !== null && intArr[deque.peekBack()] > intArr[i]) {
      deque.dequeueFront();
    }
    deque.enqueueBack(i);
  }
  result.push(intArr[deque.peekFront()]);
  return result;
}

console.log(minWindowArrK([2,3,1,1,12,3,10],1));