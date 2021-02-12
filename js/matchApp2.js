function hasSameType(user1, user2) {
  if(user1.length !== user2.length) return false;
  let hashmap = {};
  // hashmapで、user1のstringに対してuser2のstringを割り当てたものを作る
  for(let i = 0; i < user1.length; i++) {
    // hashmapのプロパティの中身がundefinedかつhashmapのvalueを全て取り出した中にuser2[i]の値が存在しない時
    if(hashmap[user1[i]] === undefined && !Object.values(hashmap).includes(user2[i])) {
      hashmap[user1[i]] = user2[i];
    }
  }
  let convertUserStr = ""
  for(let i = 0; i < user1.length; i++) {
    if(hashmap[user1[i]]) convertUserStr += hashmap[user1[i]];
  }
  return convertUserStr === user2;
}

console.log(hasSameType("aaabbccdddaa","jjjddkkpppjd"));