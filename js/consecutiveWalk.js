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

// 引数に配列を受け取り、配列の中身をチェックして、最後まで単調減少している値を配列にしたものを返す
// consecutiveWalkという関数を作る
// ex in: [1,2,33,4,55,6,77,8,9,4,3,2,1] out: [9,4,3,2,1]

function consecutiveWalk(arr) {
  // スタックを作る
  let stack = new Stack();
  // スタックの先頭に配列の最初の要素を入れる
  stack.push(arr[0]);
  for(let i = 0; i < arr.length; i++) {
    // 単調増加になってしまった場合はスタックを空にする
    if(stack.peek() < arr[i]) {
      // popはthis.headを返すので、そこでnullになるまでpopを続ける
      while(stack.pop() !== null);
    }
    // 単調減少の場合はスタックに要素を追加していく
    // スタックには5,3,2の順番で入っているので、取り出す場合は2,3,5となることに注意
    stack.push(arr[i]);
  }
  // 最終的な配列を設定するための空配列
  let result = [];
  while(stack.peek() !== null) result.unshift(stack.pop());
  return result;
}

console.log(consecutiveWalk([3,4,20,45,56,6,4,3,5,3,2])); // [5,3,2]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54])); // [64,3,0,-34,-54]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54,4])); // [4]