// 小文字によって構成される配列が与えられるので、n以降の文字をカウントする、higherThanNという関数を作成
function higherThanN(list) {
  let count = 0;
  for(let i = 0; i < list.length; i++) {
    let sentence = list[i];
    for(let j = 0; j < sentence.length; j++) {
      if(sentence[j].charCodeAt(0) >= 110) {
        count++;
      }
    }
  }
  return count;
}

// 20
console.log(higherThanN(["the wood", "pecked peckers", "at the inn", "tomorrowland"]));

// 17
console.log(higherThanN(["he","fumbled","in","the","darkness","looking","for","the","light","switch"]));

// 11
console.log(higherThanN(["he","is","never","at","home","on","weekends"]));