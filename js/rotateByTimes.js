function rotateByTimes(ids, n) {
  let resultArray = [...ids];
  for(let i = 0; i < ids.length; i++) {
    resultArray[(i + n) % ids.length] = ids[i]
  }
  return resultArray;
}

// 12345

// idsの01234番目はそれぞれ
// newIdsの2%5, 3%5, 4%5, 6%5番目になる 

// 234 56 この5 6 はそれぞれ 5 % 5 = 0, 6 % 5 = 1となる
console.log(rotateByTimes([1,2,3,4,5],2));
// =>[4,5,1,2,3]