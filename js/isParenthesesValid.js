class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
  }

  pop() {
    if(this.head === null) return null;
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  peek() {
    if(this.head === null) return null;
    return this.head.data;
  }
}

function isParenthesesValid(parentheses) {
  let hashMap = {
    "]": "[",
    "}": "{",
    ")": "("
  };

  let stack = new Stack();
  let allStr = parentheses.split("");
  // stackの先頭にallStrの先頭をいれる
  // headの値と、次の値を見て、hashMapを使って比較する
  stack.push(allStr[0]);  
  for(let i = 1; i < allStr.length; i++) {
    if(hashMap[allStr[i]] === stack.peek()) {
      stack.push(allStr[i]);
      stack.pop();
      stack.pop();
    } else {
      stack.push(allStr[i]);
    }
  }
  return stack.peek() === null;
}

console.log(isParenthesesValid("{}"))
console.log(isParenthesesValid("[{}]"))
console.log(isParenthesesValid("((()(())))"))
console.log(isParenthesesValid("[{(}])"))
// stackの中身にpushしていき、先頭とペアになった場合は先頭をpopして、現在の値はpushしない