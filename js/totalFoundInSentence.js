// 文の配列と文字を受け取り、その文字を含む文が何個あるかを返します。アルファベットの大文字、小文字は区別しないとします。

function totalFoundInSentence(sentence, str) {
  let count = 0;
  for(let i = 0; i < sentence.length; i++) {
    let checkSentence = sentence[i].toLowerCase()
    console.log(checkSentence);
    for(let j = 0; j < checkSentence.length; j++) {
      count += checkSentence[j] === str ? 1 : 0;
    }
  }
  return count;
}


let list = ["The wood", "Pecked peckers", "At the inn", "Tomorrowland"];

let totalFound = totalFoundInSentence(list,'a');
console.log(totalFound);