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
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
  }

  pop() {
    if(this.head === null) return null;
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  peek() {
    if(this.head === null) return null;
    return this.head.data;
  }
}

// 受け取った引数を逆向きの配列にする
function reverse(arr) {
  let stack = new Stack();
  for(let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  let result = [];
  while(stack.peek() !== null) {
    result.push(stack.pop());
  }
  return result;
}

let stackArray = [1,2,3,4,5,6];
console.log(stackArray);

console.log(reverse(stackArray));