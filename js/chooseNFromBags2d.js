// 鞄の中から選ぶには、ラウンドロビンというやり方を使いましょう。ラウンドロビンとは、1つずつ周回して、終わったら最初からやり直すという意味です。
// 4つのバッグがある場合, bag1 -> bag2 -> bag3 -> bag4 -> bag1 -> bag2...のような処理が行われます。

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 表示用の関数
function printArray(intArr){
  let string = "[";
  for (let i = 0; i < intArr.length; i++){
      string += intArr[i] + " ";
  }
  console.log(string + "]");
}

function chooseNFromBags2d(n, listOfBags) {
  let bagsCount = listOfBags.length;
  let chooseNArray = [];
  let count = 0;
  while(count < n) {
    let currentBag = listOfBags[count % bagsCount];
    chooseNArray.push(currentBag[randomInt(0, currentBag.length - 1)])
    count++;
  }
  return chooseNArray;
}

let luckyArrayOfBags = [[21,5,12,25],[100,88,354,643],[122,145,825,4],[228,674,777,77]];
// chooseNFromBags2d(5, luckyArrayOfBags) => [21,88,122,77,12]みたいな感じで、1つの配列から1つずつ要素を取得してくる

printArray(chooseNFromBags2d(10, luckyArrayOfBags));