let arr = [34,4546,32,3,2,8,6,76,56,45,34,566,1];

for(i = 1; i < arr.length; i++) {
  let currentValue = arr[i];
  // jは右から左へインデックスを追跡する。左側にあるものは全てソートされている
  for(let j = i - 1; j >= 0; j--){
    // arr[i]とarr[j]（arr[i]の1つ前)を比較して、arr[i]の1つ前の数値がarr[i]以上なら
    // arr[j + 1]（つまりarr[i]）はarr[j]に置き換えられる
    // arr[j] はcurrentValue（arr[i]）に置き換えられる
    if(currentValue <= arr[j]) {
      arr[j + 1] = arr[j]
      arr[j] = currentValue
    } else {
      break;
    }
  }
}

console.log(arr);