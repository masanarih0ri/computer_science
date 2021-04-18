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

  peek() {
    if(this.head === null) return null;
    return this.head.data;
  }

  pop() {
    if(this.head === null) return null;
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }
}

function countUpArrayWithStack(arr) {
  let stack = new Stack();
  // スタックに配列の先頭のデータを入れる
  stack.push(arr[0]);
  // ループして、配列の全ての要素の値を調べる
  // 配列の要素がスタックの先頭よりも小さかったらスタックは空にする
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < stack.peek()) {
      while(stack.pop() !== null);
    }
    // 2,3,4,5のように値が大きくなっているとすると、スタックに入る順番は
    // 2,3,4,5となるので、取り出す時の順番は5,4,3,2となる
    stack.push(arr[i]);
  }
  // 最終的に返す配列を準備
  let result = [];
  while(stack.peek() !== null) result.unshift(stack.pop());
  return result;
}

console.log(countUpArrayWithStack([3,4,20,45,56,6,4,3,2,3,9])); // [2,3,9]
console.log(countUpArrayWithStack([4,5,4,2,4,3646,34,64,3,0,-34,-54])); // [-54]
console.log(countUpArrayWithStack([4,5,4,2,4,3646,34,64,3,0,-34,-54,4])) //[-54, 4]