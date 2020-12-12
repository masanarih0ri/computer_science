function searchList(list, value) {
  let map = {};
  for(let i = 0; i < list.length; i++) {
    if(map[list[i]]) continue; //ここの調査から
    map[list[i]] = i;
  }
  console.log(map)
  return map[value] !== undefined ? map[value] : -1
}

console.log(searchList([1,2,3,3,4,5,5,6], 5))
// console.log(searchList([1,2,3,3,4,5,6,6], 3))
// console.log(searchList([1,2,3,3,4,5,6,6], 0))