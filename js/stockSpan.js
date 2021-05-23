function stockSpan(stocks) {
  let stack = [];
  let results = [];

  for(let i = 0; i < stocks.length; i++) {
    let current = stocks[i];
    let counter = 1;
    while(stocks[stack[stack.length - 1]] < current) {
      counter += results[stack.pop()];
    }
    results.push(counter);
    stack.push(i);
  }
  return results;
}

console.log(stockSpan([30,50,60,20,30,64,80]));
console.log(stockSpan([24,5,67,60,24,64,23,536,345]));
console.log(stockSpan([200,85,40,60,40,65,90]))
console.log(stockSpan([30,45,20,100,235,300,4500,40,100]));
console.log(stockSpan([34,640,100,234,56,34,25,200,1020,160]));