function maximizeCount(intArr, number) {
  let sum = 0;
  let count = 0
  let baseArr = [...intArr].sort((a,b) => {
    return a - b;
  });
  console.log(baseArr);
  for(let i = 0; i < baseArr.length; i++) {
    sum += baseArr[i];
    console.log(sum);
    if(sum <= number) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

// console.log(maximizeCount([1,2,3,4],10))
// console.log(maximizeCount([6,1,2],5))
// console.log(maximizeCount([30,10,20,30,30],100))
// console.log(maximizeCount([30,10,20,30,30],5))
console.log(maximizeCount([30,60,100,20,60,30,30,10],100))
// console.log(maximizeCount([3,3,1,1,1,2,4,3,1],6))