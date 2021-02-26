class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  // Listを初期化
  constructor(arr) {
    this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);
    let currentNode = this.head;
    for(let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode = currentNode.next;
    }
  }
  
  at(index) {
    let iterator = this.head;
    for(let i = 0; i < index; i++) {
      iterator = iterator.next;
      if(iterator === null) return null;
    }
    return iterator;
  }
  
  printList() {
    let iterator = this.head;
    let str = "";
    while(iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
    console.log(str);
  }
}

let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);


// 既存のListの表示
console.log(numList.at(2).data);
console.log(numList.at(3).data);
console.log(numList.at(4).data);

numList.printList();

// インデックス2と3の間に40という数値をいれる
// インデックス2のnextを変数に格納
// 新しいNode（=40）を作成
// インデックス2のnextを新しいNode（=40）に変更
// 新しいNodeのnextをインデックス2のnextだったものに変更

let thirdNode = numList.at(2);
let tempNode = thirdNode.next
let newNode = new Node(40);
newNode.next = tempNode;
thirdNode.next = newNode;

console.log(numList.at(2).data);
console.log(numList.at(3).data);
console.log(numList.at(4).data);

numList.printList();