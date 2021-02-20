class Node {
  constructor(data) {
    this.next = null,
    this.data = data
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null);
    // = はメモリアドレスを指す
    let currentNode = this.head;
    for(let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode = currentNode.next
    }
  }
  
  at(index) {
    // headをiteratorで参照できるようにする
    let iterator = this.head;
    // ループでiteratorのnextを参照し続けるようにする
    // 最初はheadのnext、次はheadのnextのnext...という感じ
    for(let i = 0; i < index; i++) {
      iterator = iterator.next;
      // indexの数がarr.length以上だとnullを返す（最終的にnull.dataでエラー）
      if(iterator === null) return null;
    }
    return iterator;
  }
}

let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

console.log(numList.at(2).data);
console.log(numList.at(12).data);
