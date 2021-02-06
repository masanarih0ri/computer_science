let arr = [34,4546,32,3,2,8,6,76,56,45,34,566,1];

for(let i = 0; i < arr.length; i++) {
  let minIndex = i;
  for(let j = i + 1; j < arr.length; j++) {
    // i番目以降の値の方が小さければ擬似的な最小のインデックスを更新する
    if(arr[j] <= arr[minIndex]) {
      minIndex = j;
    }
  }
  // tempにarr[i]を避けておいて
  // arr[i]（現在の先頭）にarr[minIndex]をいれる
  // その上でarr[minIndex]にはtempに避けておいたarr[i]をいれる
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr);