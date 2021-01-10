function firstNonRepeating(string) {
  let hashmap = {};
  let strArr = string.split("");
  for(let i = 0; i < strArr.length; i++) {
    if(!hashmap[strArr[i]]) {
      hashmap[strArr[i]] = 1;
    } else {
      hashmap[strArr[i]] = hashmap[strArr[i]] + 1;
    }
  }
  
  let nonRepeatingKeys = [];
  for(let [key, value] of Object.entries(hashmap)) {
    if(value === 1) {
      nonRepeatingKeys.push(key);
    }
  }
  
  if(nonRepeatingKeys.length) {
    return string.indexOf(nonRepeatingKeys[0]);
  } else {
    return -1;
  }
}

console.log(firstNonRepeating("aabbcdddeffg"));