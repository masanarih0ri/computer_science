// オペランド1、オペランド2、演算子を受け取って、計算を行うapplyOperationという関数を作成してください。
// オペランドは文字列として渡されるのでint型に変換する必要があります。
// もし演算子が+、-、*、/に該当しない場合は、NaN(Not A Number)を返してください。

// addEventListener(種類, 関数)を使って、各ボタンがクリックされるとapplyOperationという関数が実行され、その出力をanswerというid属性を持つinputタグのvalue属性に反映させてください。 
// JSではinputタグのvalue属性は直接変更することができます。

// ここからJavaScriptを記述してください。
// ボタンをクリックしたら、
// inputタグの中身を取ってきて
// operand1, operand2, operatorををセットした関数を回す
// 計算結果をresultに出す
let plusButton = document.getElementById("plusOperator");
let minusButton = document.getElementById("minusOperator");
let timesButton = document.getElementById("timesOperator");
let divideButton = document.getElementById("divideOperator");
let answer = document.getElementById("answer");

let operand1 = null;
let operand2 = null;
let operator = null;

function applyOperation(operand1, operand2, operator) {
  if(operator === "+") {
    answer.value = operand1 + operand2;
  } else if (operator === "-") {
    answer.value = operand1 - operand2;
  } else if (operator === "*") {
    answer.value = operand1 * operand2;
  } else if (operator === "/") {
    if(operand2 === 0) return operand1;
    answer.value = operand1 / operand2;
  } else {
    answer.value = NaN;
  }
}

function setOperands() {
  operand1 = parseInt(document.getElementById("operator1").value, 10);
  operand2 = parseInt(document.getElementById("operator2").value, 10);
  
}

plusButton.addEventListener("click", function() {
  setOperands();
  operator = "+"
  applyOperation(operand1, operand2, operator);
});

minusButton.addEventListener("click", function() {
  setOperands();
  operator = "-"
  applyOperation(operand1, operand2, operator);
});

timesButton.addEventListener("click", function() {
  setOperands();
  operator = "*"
  applyOperation(operand1, operand2, operator);
});

divideButton.addEventListener("click", function() {
  setOperands();
  operator = "/"
  applyOperation(operand1, operand2, operator);
});

