// 例題2
// 文字列stringが与えられるので、全ての文字が同じ数だけ含まれているかどうか判定するfindXTimesという関数を作成してください。

// "babacddc" -> true
// "aaabbbcccddd" -> true
// "aaabbccdd" -> false
// "zadbchvwxbwhdxvcza" -> true
// "zadbchvwxbwhdxvczb" -> false

function findXTimes(str) {
  let hashmap = {};
  let strChars = str.split("");
  for(let i = 0; i < strChars.length; i++) {
    if(!hashmap[strChars[i]]) {
      hashmap[strChars[i]] = 1;
    } else {
      hashmap[strChars[i]] = hashmap[strChars[i]] + 1;
    }
  }
  let strCountList = Object.values(hashmap);
  let baseCount = strCountList[0];
  for(let i = 1; i < strCountList.length; i++) {
    if(baseCount !== strCountList[i]) return false;
  }
  return true;
}

console.log(findXTimes("ssuyy"));