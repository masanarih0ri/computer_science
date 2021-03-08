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
      this.head = new Node(null);
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

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();

console.log(numList.head.data);
console.log(numList.head.next.data);

console.log(numList.tail.data);
console.log(numList.tail.prev.data);