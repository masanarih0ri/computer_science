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
  
  printList() {
    let iterator = this.head;
    let str = "";
    while(iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
  }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
console.log(numList.at(0).data)
console.log(numList.at(2).data)
console.log(numList.at(12).data)
// console.log(numList.at(11).data)