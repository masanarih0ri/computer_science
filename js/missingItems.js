function missingItems(listA, listB) {
  let hashmap = new Map();
  let resultItems = [];
  // cacheする
  for(let i = 0; i < listB.length; i++) {
    hashmap.set(listB[i], listB[i])
  }
  
  for(let i = 0; i < listA.length; i++) {
    if(!hashmap.get(listA[i])) {
      resultItems.push(listA[i]);
    }
  }
  return resultItems;
}

console.log(missingItems([1,2,3,4,5,6,7,8],[1,3,5]));
// output => [2,4,6,7,8]