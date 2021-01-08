function findPairs(arr) {
  // hashmapを作る
  let hashmap = {};
  for(let i = 0; i < arr.length; i++) {
    if(hashmap[arr[i]] === undefined) {
      hashmap[arr[i]] = 1;
    } else {
      hashmap[arr[i]] = hashmap[arr[i]] + 1;
    }
  }
  
  let result = [];
  for(let [key, value] of Object.entries(hashmap)) {
    if(value === 2) {
      result.push(Number(key));
    }
  }
  return result.sort((x, y) => {
    return x - y;
  });
}

console.log(findPairs([10,12,13,14,15,16,16,7,7,8]));