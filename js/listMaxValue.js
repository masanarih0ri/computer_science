// 整数によって構成される配列が与えられるので、配列内の最大値を返す、maxValueという関数を作成

function maxValue(list) {
  if(!list) return;
  let previousNumber;
  let currentNumber;
  let maxNumber;
  for(let i = 0; i < list.length; i++) {
    previousNumber = list[i];
    currentNumber = list[i + 1];
    if(previousNumber && currentNumber) {
      maxNumber = previousNumber >= currentNumber ? previousNumber : currentNumber
      // ↑の三項演算子のところは下記でもOK
      // if(previousNumber >= currentNumber) {
      //   maxNumber = previousNumber;
      // } else {
      //   maxNumber = currentNumber;
      // }
    }
  }
  return maxNumber;
}

const numberList = [1,2,3,4,5,6,7,78,9,0,11,111];
console.log(maxValue(numberList));

console.log(maxValue([3,43,5,4,2,100,6]));

// よりシンプルな方法
function listMaxValue(list) {
  let maxValue = list[0];
  for(let i = 0; i < list.length; i++) {
    if(maxValue <= list[i]) {
      maxValue = list[i];
    }
  }
  return maxValue;
}

console.log(listMaxValue([3,43,5,4,2,100,6]));