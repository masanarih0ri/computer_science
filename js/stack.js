class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  peek() {
    if(this.head === null) return null;
    return this.head.data;
  }

  pop() {
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }
}

let s = new Stack();

s.push(2);
console.log(s.peek());

s.push(4);
s.push(3);
s.push(1);
s.pop();
console.log(s.peek());