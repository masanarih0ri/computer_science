// 例題
// 自然数nが与えられるので、1からnまでに含まれる素数を空の動的配列に追加する、primeNumberを作成し、print_listで出力してください。
function primeNumber(n) {
  let primeNumberList = [];
  for(let i = 1; i <= n; i++) {
    if(isPrimeNumber(i)) {
      primeNumberList.push(i);
    }
  }
  return primeNumberList
}

function isPrimeNumber(n) {
  if(n === 2) {
    return true;
  } else if(n < 2) {
    return false;
  }
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrimeNumber(11)); // true
// console.log(isPrimeNumber(110)); // false
// console.log(isPrimeNumber(1)); / // false
// console.log(isPrimeNumber(2)); // true
// console.log(isPrimeNumber(3)); // true
// console.log(isPrimeNumber(5)); // true
// console.log(isPrimeNumber(9)); // false
// console.log(isPrimeNumber(45)); // false

function print_list(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

print_list(primeNumber(177));