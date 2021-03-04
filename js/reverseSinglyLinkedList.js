class Node {
  constructor(data) {
    this.data = data;
    this.next = null
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
    let iterator;
    for(let i = 0; i < index; i++) {
      iterator = iterator.next;
      if(iterator === null) return null;
    }
    return iterator;
  }
  
  prepend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }
  
  append(newNode) {
    let iterator = this.head;
    while(iterator.next !== null) {
      iterator = iterator.next;
    }
    iterator.next = newNode;
  }
  
  popFront() {
    this.head = this.head.next;
  }
  
  delete(index) {
    if(index === 0) return this.popFront();
    let iterator = this.head;
    for(let i = 0; i < index - 1; i++) {
      if(iterator.next === null) return null;
      iterator = iterator.next;
    }
    iterator.next = iterator.next.next;
  }
  
  reverse() {
    if(this.head === null || this.head.next === null) return;
    let reverse = this.head;
    this.head = this.head.next;
    reverse.next = null
    while(this.head !== null) {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = reverse;
      reverse = temp;
    }
    this.head = reverse;
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

let numList = new SinglyLinkedList([1,2,4]);
numList.printList();
numList.reverse();
numList.printList();