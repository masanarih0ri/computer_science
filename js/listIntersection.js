function listIntersection(targetList, searchList) {
  let hashmap = new Map();
  let result = [];
  for(let i = 0; i < targetList.length; i++) {
    hashmap.set(targetList[i], targetList[i]);
  }
  
  for(let i = 0; i < searchList.length; i++) {
    if(hashmap.get(searchList[i])) {
      result.push(searchList[i]);
    }
  }
  return result;
}

console.log(listIntersection([1,2,3,4,5,6],[1,4,4,5,8,9,10,11]));