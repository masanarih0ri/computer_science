function hasSameType(user1,user2){
  if(user1.length !== user2.length) return false;

  let user1Str = user1.split("");
  let user2Str = user2.split("");
  let user1Pattern = Compatibility.checkUserAttrPattern(user1Str);
  let user2Pattern = Compatibility.checkUserAttrPattern(user2Str);
  let user1Hashmap = Compatibility.userAttrHashMap(user1Str);
  let user2Hashmap = Compatibility.userAttrHashMap(user2Str);
  
  if(Object.values(user1Hashmap).toString() !== Object.values(user2Hashmap).toString()) return false;
  return user1Pattern.toString() === user2Pattern.toString()
}

class Compatibility {
  static userAttrHashMap(userAttrStr) {
    let hashmap = {};
    for(let i = 0; i < userAttrStr.length; i++) {
      if(hashmap[userAttrStr[i]]) {
        hashmap[userAttrStr[i]] += 1;
      } else {
        hashmap[userAttrStr[i]] = 1;
      }
    }
    return hashmap;
  }
  
  static checkUserAttrPattern(userAttrStr) {
    let userPattern = []
    for(let i = 0; i < userAttrStr.length; i++) {
      let currentValue = userAttrStr[i];
      if(currentValue === userAttrStr[i+1]) {
        userPattern.push(true);
      } else {
        userPattern.push(false)
      }
    }
    return userPattern;
  }
}

console.log(hasSameType("aappl","bbttb"))