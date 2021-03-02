class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  
  addNextNode(newNode) {
    let tempNode = this.next;
    this.next = newNode;
    newNode.next = tempNode;
  }
}

class SinglyLinkedList {
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
    }
    return iterator;
  }
  
  // 先頭にNodeを追加
  preappend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }
  
  // 末尾にNodeを追加
  append(newNode) {
    let iterator = this.head;
    while(iterator.next === null) {
      iterator = iterator.next;
    }
    iterator.next = newNode;
  }
  
  // 先頭のNodeを削除
  popFront() {
    this.head = this.head.next;
  }
  
  // 指定の場所のNodeを削除
  delete(index) {
    if(index === 0) return this.popFront();
    let iterator = this.head;
    for(let i = 0; i < index - 1; i++) {
      if(iterator.next === null) return null;
      iterator = iterator.next;
    }
    iterator.next = iterator.next.next;
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

numList.popFront();
numList.popFront();

numList.printList();

numList.delete(4);
numList.printList();

numList.delete(9);
numList.printList();

