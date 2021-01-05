function indexOfPairsForMark(list, number) {
  // hashmapを作る
  let hashmap = {};
  // { 0: 1, 1: 1, 2: 1... } のようなhashmap(オブジェクト)になる
  for(let i = 0; i < list.length; i++) {
    hashmap[i] = list[i];
  }
  let result = [];

  for(let i = 0; i < list.length; i++) {
    let firstNum = hashmap[i];
    let secondNum = 0;
    for(let j = i + 1; j < list.length; j++) {
      secondNum = list[j];
      if(firstNum * secondNum === number) {
        result.push(i);
        result.push(j);
      }
    }
  }
  
  return result;
}

// indexOfPairsForMark([3,5,8,10],30) --> [0,3] 
console.log(indexOfPairsForMark([1,1,1,1],1));
console.log(indexOfPairsForMark([3,4,6,8,12,2],24));