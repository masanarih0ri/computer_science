// Milesは英単語カードを持って勉強していましたが、手元にある単語を文字コードへ変換した時、最も大きい値が何になるか気になりました。英単語カードstringListが与えられるので、最も値が大きくなった単語が何枚目にあるかを返すmaxInStringListという関数を定義してください（ここでは初めの値を0枚目とします）。ただし、以下の条件に気をつけてください。

// - 文字列に含まれるそれぞれの文字を文字コードによって10進数へと変換し、足し合わせる。(例：”abc”は文字コードによってa = 97、b = 98、c = 99へと変換され、全部足し合わせて294と計算されます)
　
// - 大文字と小文字の区別はありません。(例：”A” == "a" == 97となる)

// stringListからそれぞれの要素を取ってくる
// stringの文字をそれぞれループして、全て小文字にした上で、文字コード変換して数値にする
// 合計値をそれぞれ出して配列として、その配列の最大値があるindexを返す
function maxInStringList(stringList) {
  let sumList = [];
  for(let i = 0; i < stringList.length; i++) {
    let currentString = stringList[i];
    let currentSum = 0;
    for(let j = 0 ; j < currentString.length; j++) {
      currentSum += currentString[j].toLowerCase().charCodeAt(0)
    }
    sumList.push(currentSum);
  }
  return sumList.indexOf(Math.max(...sumList));
}

console.log(maxInStringList(["Fantastic","Bridge","Superior","Fantastic","Operator"]));