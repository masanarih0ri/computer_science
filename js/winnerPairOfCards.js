function winnerPairOfCards(player1,player2){
  const p1Cards = Dealer.extractIntValue(player1);
  const p2Cards = Dealer.extractIntValue(player2);
  // プレイヤーの手札を数値に変換した配列をセットする
  const playerCardValues = [p1Cards, p2Cards];
  // プレイヤーの手札にペアのカードがあるか確認できるようにhashmapを使う
  const hashmaps = Dealer.countValues(playerCardValues);
  const pairCounts = Dealer.pairCounts(hashmaps);
  const p1Keys = Object.keys(hashmaps[0]);
  const p2Keys = Object.keys(hashmaps[1]);
  // それぞれのカードが何枚ずつあるか、という数値の配列を作る
  const p1Values = Object.values(hashmaps[0]);
  const p2Values = Object.values(hashmaps[1]);
  // 1番枚数の多いインデックスを保持する変数を作り、値をいれる
  const p1MaxValueIndex = Dealer.maxValueIndex(p1Values);
  const p2MaxValueIndex = Dealer.maxValueIndex(p2Values);
  // 上記のインデックスを使うために、keyの順番でカードの数値を並べた配列をセットする
  const p1CardIntValues = Dealer.cardIntValues(p1Keys);
  const p2CardIntValues = Dealer.cardIntValues(p2Keys);
  
  // ゲームにおける条件比較を行う変数に値をセットする
  const p1PairCount = pairCounts[0];
  const p2PairCount = pairCounts[1];
  
  let p1NoPairHash = Dealer.noPairCardHash(hashmaps[0]);
  let p2NoPairHash = Dealer.noPairCardHash(hashmaps[1]);
  
  let p1PairHash = Dealer.pairCardHash(hashmaps[0]);
  let p2PairHash = Dealer.pairCardHash(hashmaps[1]);
  
  const p1NoPairKeys = Object.keys(p1NoPairHash);
  const p2NoPairKeys = Object.keys(p2NoPairHash);
  const p1PairKeys = Object.keys(p1PairHash);
  const p2PairKeys = Object.keys(p2PairHash);
  
  const p1NoPairCardIntValues = Dealer.cardIntValues(p1NoPairKeys);
  const p2NoPairCardIntValues = Dealer.cardIntValues(p2NoPairKeys);
  
  const p1PairCardIntValues = Dealer.cardIntValues(p1PairKeys);
  const p2PairCardIntValues = Dealer.cardIntValues(p2PairKeys);
  
  const p1PairCardMaxValue = Math.max(...p1PairCardIntValues);
  const p2PairCardMaxValue = Math.max(...p2PairCardIntValues);
  
  const p1NoPairCardMaxValue = Math.max(...p1NoPairCardIntValues);
  const p2NoPairCardMaxValue = Math.max(...p2NoPairCardIntValues);
  
  if(p1PairCount > p2PairCount) {
    return "player1";
  } else if(p1PairCount < p2PairCount) {
    return "player2";
  } else {
    if(p1PairCardMaxValue > p2PairCardMaxValue) {
      return "player1"; 
    } else if(p1PairCardMaxValue < p2PairCardMaxValue) {
      return "player2";
    } else {
      if(p1NoPairCardMaxValue > p2NoPairCardMaxValue) {
        return "player1";
      } else if(p1NoPairCardMaxValue < p2NoPairCardMaxValue) {
        return "player2";
      } else {
        return "draw"
      }
    }
  }
}

class Dealer {
  // カードを数値のみにする
  static extractIntValue(cards) {
      let extractValues = [];
      let pairOfCards = {"J": 11, "Q": 12, "K": 13, "A": 14}
      for(let i = 0; i < cards.length; i++) {
          let currentValue = cards[i].slice(1);
          let intValue = (currentValue in pairOfCards) ? pairOfCards[currentValue] : parseInt(currentValue);
          extractValues.push(intValue)
      }
      return extractValues;
  }
  
  // 数値のみの配列から、ある数値がいくつあるか、という情報を持ったオブジェクトの配列を作る
  static countValues(cardValues) {
    let hashmaps = [];
    for(let i = 0; i < cardValues.length; i++) {
      let hashmap = {}
      for(let j = 0; j < cardValues[i].length; j++) {
        let currentValue = cardValues[i][j];
        if(hashmap[currentValue]) {
          hashmap[currentValue] += 1;
        } else {
          hashmap[currentValue] = 1
        }
      }
      hashmaps.push(hashmap);
    }
    return hashmaps;
  }
  
  // ペア数の最大値を計算して、数値を配列として持つようにする
  static pairCounts(hashmaps) {
    let pairCounts = [];
    for(let i = 0; i < hashmaps.length; i++) {
      pairCounts.push(Math.max(...Object.values(hashmaps[i])));
    }
    return pairCounts;
  }
  
  // ペアになっているものの最大値のインデックスを返す（ペアがないなら最大のインデックスを返す）
  static maxValueIndex(values) {
    let maxValueIndex = 0
    let maxValue = values[0];
    for(let i = 1; i < values.length; i++) {
      if(maxValue <= values[i]) {
        maxValueIndex = i;
        maxValue = values[i];
      }
    }
    return maxValueIndex;
  }
  
  // 引いたカードの数値を小さい順に並べた配列を返す
  static cardIntValues(keys) {
    let cardIntValues = [];
    
    for(let i = 0; i < keys.length; i++) {
      cardIntValues.push(parseInt(keys[i]));
    }
    return cardIntValues;
  }
  
  static noPairCardHash(hashmap) {
    let hash = {...hashmap};
    for (const [key, value] of Object.entries(hash)) {
      if(hash[key] >= 2) {
        delete hash[key]
      }
    }
    return hash;
  }
  
  static pairCardHash(hashmap) {
    let hash = {...hashmap};
    for (const [key, value] of Object.entries(hash)) {
      if(hash[key] === 1) {
        delete hash[key]
      }
    }
    return hash;
  }
}  

console.log(winnerPairOfCards(["♥3","♠9","♦3","♣Q","♦A"],["♥4","♥3","♠10","♦3","♥4"]))