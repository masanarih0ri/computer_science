class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  
  // 新しいNodeを受け取り、次のNodeに設定する
  addNextNode(newNode) {
    let tempNode = this.next;
    this.next = newNode;
    newNode.next = tempNode;
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);
    let currentValue = this.head;
    for(let i = 1; i < arr.length; i++) {
      currentValue.next = new Node(arr[i]);
      currentValue = currentValue.next;
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
numList.printList();

let iterator = numList.head;
let i = 0;
while(iterator !== null) {
  let currentNode = iterator;
  iterator = iterator.next;
  if(i % 2 === 0) currentNode.addNextNode(new Node(currentNode.data * 2));
  i++;
}
numList.printList();