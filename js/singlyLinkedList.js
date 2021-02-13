// Nodeはリストのデータとポインタ（next）を持つ
class Node {
  constructor(data) {
    this.next = null,
    this.data = data
  }
}

// リストの先頭に1つのnodeを指定する
class SinglyLinkedList {
  constructor(node) {
    this.head = node;
  }
}

let arr =  [35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555];
// 先頭のnodeをarr[0]に指定する
let numList = new SinglyLinkedList(new Node(arr[0]));
// 現在のノードをheadに設定する
let currentNode = numList.head;
// ループでそれぞれのnodeにnextを設定していく
for(let i = 1; i < arr.length; i++) {
  currentNode.next = new Node(arr[i]);
  currentNode = currentNode.next;
}

// console.logで表示するためにcurrentNodeを再度先頭に戻す
currentNode = numList.head
for(let i = 0; i < arr.length; i++) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}