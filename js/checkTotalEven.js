// 整数の配列を取り込んで、偶数が何個あるかを調べます。
function checkEven(number) {
  return number % 2 === 0;
}

function checkTotalEven(list) {
  let count = 0;
  for(let i = 0; i < list.length; i++) {
    count += checkEven(list[i]) ? 1 : 0
  }
  
  // 下記でもOK
  // for(let i = 0; i < list.length; i++) {
  //   if(checkEven(list[i])) {
  //     count++;
  //   }
  // }
  return count;
}

let list1 = [2,3,4,5,67,33,43,56,78,54,122,2142,333];

let totalEvens = checkTotalEven(list1);
console.log(totalEvens);