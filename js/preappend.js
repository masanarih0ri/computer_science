class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  
  addNextNode(newNode) {
    let tempNode = this.next;
    this.next = newNode;
    newNode.next = tempNode
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);
    let iterator = this.head;
    for(let i = 1; i < arr.length; i++) {
      iterator.next = new Node(arr[i]);
      iterator = iterator.next;
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
  
  preappend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }
}

let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
numList.preappend(new Node(45));
numList.preappend(new Node(236));
numList.printList();