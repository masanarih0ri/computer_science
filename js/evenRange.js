// 例題
// a,bが与えられるので、aからbまでの中で2の倍数を空の動的配列に追加する関数、even_rangeという関数を作成し、print_listによって出力してください。
function even_range(a, b) {
  let resultArray = [];
  for(let i = a; i <= b; i++) {
    if(i % 2 === 0) { resultArray.push(i) };
  }
  return resultArray;
}

function print_list(array) {
  console.log(array);
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

print_list(even_range(1,15));