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
  
  // 先頭に追加
  prepend(newNode) {
    this.head.prev = newNode;
    newNode.next = this.head;
    newNode.prev = null;
    this.head = newNode;
  }
  
  // 末尾に追加
  append(newNode) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    newNode.next = null;
    this.tail = newNode;
  }
  
  addNextNode(node, newNode) {
    let tempNode = node.next;
    node.next = newNode;
    newNode.prev = node;
    newNode.next = tempNode;
    if(this.tail === node) {
      this.tail = newNode;
    } else {
      tempNode.prev = node;
    }
  }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);
numList.printList();

// 45をprepend
numList.prepend(new Node(45));
console.log(numList.head.data);
numList.printList();

// 71をappend
numList.append(new Node(71));
console.log(numList.tail.data);
numList.printList();
console.log("");

// ノードの後に新しいノードを追加

console.log("add_new_node_at_3")
numList.addNextNode(numList.at(3), new Node(4));
numList.printList();
console.log(numList.tail.data);

console.log("add_new_node_at_15")
numList.addNextNode(numList.at(15), new Node(679));
numList.printList();
console.log(numList.tail.data);

numList.printInReverse();