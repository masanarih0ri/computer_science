let arr1 = [23,43,2432,5464,3425,656,232]
let arr2 = [43,23,55,34]
let arr3 = [23,6464,43,54,6988]

// console.log(hasLargerMax(arr1, arr2)); => true
// console.log(hasLargerMax(arr1, arr3)); => false
// となる関数を作る

function maxNumberOfArray(numbers) {
  // return Math.max(...numbers);でも良いが、探索を使うと下記の書き方になる
  let maxNumber = numbers[0];
  for(let i = 0; i < numbers.length; i++) {
    if(maxNumber < numbers[i]) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber;
}

function hasLargerMax(arrOp1, arrOp2) {
  if(!arrOp1) return false;
  if(!arrOp2) return true;
  return maxNumberOfArray(arrOp1) > maxNumberOfArray(arrOp2);
}
console.log(maxNumberOfArray(arr1));

console.log(hasLargerMax(arr1, arr2));
console.log(hasLargerMax(arr1, arr3));