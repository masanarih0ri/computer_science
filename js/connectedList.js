class StringNode {
  // ノードと次のノードの値の2つのインスタンス変数を持つ
  constructor(stringValue) {
    this.value = stringValue;
    this.next = null;
  }
}

class TodoList {
  constructor() {
    // TODOリストの中にはインスタンス変数は1つだけ
    // 最初はTODOリストは空
    this.head = null;
  }
  
  printList() {
    console.log("Printing the Todo List...");
    let currentNode = this.head;
    
    while(currentNode !== null) {
      // 現在のノードを表示
      console.log(currentNode.value);
      // 現在のノードを次のノードに変更する
      currentNode = this.next
    }
  }
}

// listを開始する
let todoList = new TodoList();
console.log(todoList);

// リストの中の最初の項目に先頭を設置する
// TodoListの中にあるheadがStringNodeになる
let firstItem = new StringNode("Fix the alarm clock.");
todoList.head = firstItem;
console.log(todoList);

let secondItem = new StringNode("Pickup grandmother from the dentist.");
// firstItemのnextがnullなので値をセットする
firstItem.next = secondItem;
console.log(todoList); // => この中身はfirstItem.nextにsecondItemが入り、secondItem.nextはnull

let thirdItem = new StringNode("Call the handyman to fix the home appliance.");
secondItem.next = thirdItem;
console.log(todoList);

let fourthItem = new StringNode("Go to the park to jog.");
thirdItem.next = fourthItem;
console.log(todoList);

// この時点でtodoListはheadにStringNodeを持っていて、そのStringNodeはnextにStringNodeを持っている。また次のStringNodeはnextにStringNodeを持っていて、次のStringNodeはnextの中身はnull

// printListを呼び出す
// printListを呼び出す時にはcurrentNodeにfirstItemが入る
// firstItemの中にはsecond,third,fourthのstringNodeが入っている。それぞれ1つ前のもののnextにstringNodeが入っているのでnullになるまで繰り返し
todoList.printList();



