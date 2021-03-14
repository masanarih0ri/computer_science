class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(arr) {
    if(arr.length <= 0) {
      this.head = null;
      this.tail = this.head;
      return;
    }
    
    this.head = new Node(arr[0]);
    let currentNode = this.head;
    for(let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode.next.prev = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
  }
  
  at(index) {
    let iterator = this.head;
    for(let i = 0; i < index; i++) {
      if(iterator === null) return null;
      iterator = iterator.next;
    }
    return iterator;
  }
  
  reverse() {
    let reverse = this.tail;
    let iterator = this.tail.prev;
    let currentNode = reverse;
    while(iterator !== null) {
      currentNode.next = iterator;
      iterator = iterator.prev;
      if(iterator !== null) iterator.next = null;
      currentNode.next.prev = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.head = reverse;
    this.head.prev = null;
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
  
  printInReverse() {
    let iterator = this.tail;
    let str = "";
    while(iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.prev;
    }
    console.log(str);
  }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
numList.printInReverse();

numList.printList();
numList.reverse();
numList.printList();
numList.printInReverse();