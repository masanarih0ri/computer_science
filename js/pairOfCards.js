class Card {
  constructor(suit, value, intValue) {
    this.suit = suit;
    this.value = value;
    this.intValue = intValue;
  }
  
  getCardString() {
    return `${this.suit} ${this.value}(${this.intValue})`;
  }
}

// デッキの生成やシャッフルなどを行うためのクラス
class Deck {
  constructor() {
    // generateDeck()でデッキを作成する。generateDeckはstaticなメソッド
    this.deck = Deck.generateDeck();
  }
  
  static generateDeck() {
    let newDeck = [];
    const suits = ["♣", "♦", "♥", "♠"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let pairOfCards = {"A": 14};
    
    for(let i = 0; i < suits.length; i++) { 
      for(let j = 0; j < values.length; j++) {
        let currentValue = values[j];
        let intValue = (currentValue in pairOfCards) ? pairOfCards[currentValue] : j + 1;
        newDeck.push(new Card(suits[i], values[j], intValue));
      }
    }
    return newDeck;
  }
}

// ゲームの勝敗に関する計算などをするためのクラス
class Dealer {
  static shuffleDeck(deckCards) {
    for(let i = 0; i < deckCards.length; i++) {
      let randomIndex = Math.floor(Math.random() * deckCards.length);
      let temp = deckCards[i];
      deckCards[i] = deckCards[randomIndex];
      deckCards[randomIndex] = temp;
    }
    return deckCards;
  }
  
  static draw(deckCards) {
    return deckCards.pop();
  }
  
  // ランダムな5つのオブジェクトを1つの配列の要素として、
  // プレイヤー数の分だけ要素のある配列playerCardsを渡す
  static winnerOfGame(playerCards) {
    let playerCardValues = []
    for(let i = 0; i < playerCards.length; i++) {
      let cardValues = [];
      for(let j = 0; j < playerCards[i].length; j++) {
        cardValues.push(playerCards[i][j].intValue);
      }
      playerCardValues.push(cardValues);
    }
    
    console.log(playerCardValues)

    let hashmaps = [];
    for(let i = 0; i < playerCardValues.length; i++) {
      let hashmap = {}
      for(let j = 0; j < playerCardValues[i].length; j++) {
        let currentValue = playerCardValues[i][j];
        if(hashmap[currentValue]) {
          hashmap[currentValue] += 1;
        } else {
          hashmap[currentValue] = 1
        }
      }
      hashmaps.push(hashmap);
    }
    
    console.log(hashmaps);
    let pairCounts = [];
    for(let i = 0; i < hashmaps.length; i++) {
      pairCounts.push(Math.max(...Object.values(hashmaps[i])));
    }
    
    const keys1 = Object.keys(hashmaps[0]);
    const keys2 = Object.keys(hashmaps[1]);
    const values1 = Object.values(hashmaps[0]);
    const values2 = Object.values(hashmaps[1]);
    console.log(keys1);
    console.log(keys2);
    console.log(values1);
    console.log(values2);
    let maxValueIndex1 = 0
    let maxValue1 = values1[0];
    for(let i = 1; i < values1.length; i++) {
      if(maxValue1 <= values1[i]) {
        maxValueIndex1 = i;
        maxValue1 = values1[i];
      }
    }
    
    let maxValueIndex2 = 0;
    let maxValue2 = values2[0];
    for(let i = 1; i < values2.length; i++) {
      if(maxValue2 <= values2[i]) {
        maxValueIndex2 = i;
        maxValue2 = values2[i]
      }
    }
    
    console.log(pairCounts);
    console.log(maxValueIndex1);
    console.log(maxValueIndex2);
    
    let keyValues1 = [];
    for(let i = 0; i < keys1.length; i++) {
      keyValues1.push(parseInt(keys1[i]));
    }
    
    let keyValues2 = [];
    
    for(let i = 0; i < keys2.length; i++) {
      keyValues2.push(parseInt(keys2[i]));
    }
  
    const p1PairCount = pairCounts[0];
    const p2PairCount = pairCounts[1];
    const p1MaxCardValue = keyValues1[maxValueIndex1];
    const p2MaxCardValue = keyValues2[maxValueIndex2];
    
    console.log(p1MaxCardValue);
    console.log(p2MaxCardValue)
    
    if(p1PairCount > p2PairCount) {
      return "Player1";
    } else if (p1PairCount < p2PairCount) {
      return "Player2";
    } else {
      if(p1MaxCardValue > p2MaxCardValue) {
        return "Player1";
      } else if (p1MaxCardValue < p2MaxCardValue) {
        return "Player2";
      } else {
        return "Draw"
      }
    }
  }
  
  static startGame(playerCount) {
    let table = {
      // playerの手札を入れる配列を格納する
      "players": [],
      // デッキのオブジェクトを格納する
      "deck": Deck.generateDeck()
    };
    
    Dealer.shuffleDeck(table["deck"]);
    
    const cardCount = 5;
    
    for(let i = 0; i < playerCount; i++) {
      let cards = [];
      for(let j = 0; j < cardCount; j++) {
        let drawCard = Dealer.draw(table["deck"]);
        cards.push(drawCard);
      }
      table["players"].push(cards);
    }
    return Dealer.winnerOfGame(table["players"]);
  }
  
}

let deck1 = new Deck();

console.log(Dealer.startGame(2));