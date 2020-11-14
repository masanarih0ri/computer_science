// 整数によって構成される配列が与えられるので、配列内の全ての要素を足し合わせた数値を返す、sumArrayElementという関数を作成

function sumArrayElement(list) {
  let sum = 0;
  for(let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

let numberList = [1,23,4,5,5,6,7,7,8,9,43,64,6,7,8];

console.log(sumArrayElement(numberList));

console.log(sumArrayElement([3,43,5,4,2,100,6]));