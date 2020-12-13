// 例題1
// アルファベットで構成される文字列が与えられるのでそれがパングラムかどうか判定する、isPangramという関数を作成してください。パングラムとは、a-zまでの全てのアルファベットを含んだ文字列のことを指します。

// "we promptly judged antique ivory buckles for the next prize" -> true
// "sheep for a unique zebra when quick red vixens jump over the yacht" -> false
// "a quick brown fox jumps over the lazy dog" -> true
function isPangram(str) {
  let hashmap = new Map();
  const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const strChars = str.replace(/ /g, "").split("");
  for(let i = 0; i < strChars.length; i++) {
    hashmap.set(strChars[i], strChars[i])
  }
  let notMatchedCharIndex = []
  for(let i = 0; i < alphabets.length; i++) {
    if(!hashmap.get(alphabets[i])) {
      notMatchedCharIndex.push(i)
    }
  }
  return notMatchedCharIndex.length === 0;
}

console.log(isPangram("we promptly judged antique ivory buckles for the next prize"));

console.log(isPangram("sheep for a unique zebra when quick red vixens jump over the yacht"));

console.log(isPangram("a quick brown fox jumps over the lazy dog"));