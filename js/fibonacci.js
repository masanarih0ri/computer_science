function fibonacciHelper(n1, n2, count) {
  if(count < 1) {
      return n1;
  }
  return fibonacciHelper(n2, n1 + n2, count-1);
}

function fibonacci(n){
  return fibonacciHelper(0, 1, n);
}

console.log(fibonacci(5));