function winnerBlackjack(playerCards,houseCards){
    //ここから書きましょう
    // 手札の合計値を計算する (calculateCardTotal)
    const playerTotal = calculateCardTotal(playerCards);
    const houseTotal = calculateCardTotal(houseCards);
    // 手札の合計値をチェックする (checkCardTotal)
    // 手札の合計値を比較する (CompareCardTotal)
    // プレイヤーの手札が21以下、かつ、ディーラーはプレイヤー以下の数値の場合はtrue、それ以外はfalse
    return compareCardTotal(playerTotal, houseTotal)
}

function calculateCardTotal(cards) {
    let sum = 0;
    let countArray = []
    for(let i = 0; i < cards.length; i++) {
        if (cards[i].slice(1) === "J") {
          countArray.push(11);
        } else if (cards[i].slice(1) === "Q") {
          countArray.push(12);
        } else if (cards[i].slice(1) === "K") {
          countArray.push(13);
        } else if (cards[i].slice(1) === "A") {
          countArray.push(1);
        } else {
          countArray.push(Number(cards[i].slice(1)));
        }
    }
    for(let j = 0; j < countArray.length; j++) {
      sum += countArray[j];
    }
    return sum;
}

function isNumberWithinTwentyOne(totalCount) {
  return totalCount <= 21;
}


function compareCardTotal(playerTotalCount, houseTotalCount) {
  // if (isNumberWithinTwentyOne(playerTotalCount) && isNumberWithinTwentyOne(houseTotalCount)) {
  //   return playerTotalCount > houseTotalCount
  // } 
  if (isNumberWithinTwentyOne(playerTotalCount) && !isNumberWithinTwentyOne(houseTotalCount)) {
    return true;
  } else if (isNumberWithinTwentyOne(playerTotalCount) && isNumberWithinTwentyOne(houseTotalCount)) {
    return playerTotalCount > houseTotalCount;
  } else {
    return false;
  }
}

console.log(calculateCardTotal(["♥6","♥K","♣5","♥K"]));
console.log(calculateCardTotal(["♥2","♣A","♣8","♥7","♥3"]));

console.log(winnerBlackjack(["♣4","♥7","♥7"],["♠Q","♣J"]));
console.log(winnerBlackjack(["♥10","♥6","♣K"],["♠Q","♦2","♥K"]));
console.log(winnerBlackjack(["♠3","♠J","♣5"],["♣A","♥Q","♣5"]));
console.log(winnerBlackjack(["♥2","♣A","♣8","♥7","♥3"],["♥6","♥K","♣5","♥K"]));