// 文字列によって構成される配列が与えられるので、配列内に存在する全ての文字数をカウントする、countCharという関数を作成

function countChar(list) {
  let totalCharCount = 0;
  for(let i = 0; i < list.length; i++) {
    totalCharCount += list[i].length;
  }
  return totalCharCount;
}

console.log(countChar(["The wood", "Pecked peckers", "At the inn", "Tomorrowland"]));
