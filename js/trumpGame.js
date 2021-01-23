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

class Deck {
  constructor() {
    this.deck = Deck.generateDeck();
  }
  
  static generateDeck() {
    let newDeck = [];
    const suits = ["♣", "♦", "♥", "♠"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    for(let i = 0; i < suits.length; i++) {
      for(let j = 0; j < values.length; j++) {
        newDeck.push(new Card(suits[i], values[j], j + 1));
      }
    }
    return newDeck;
  }
  
  // デッキからカードをドローするメソッドを作る
  draw() {
    return this.deck.pop();
  }
  
  // Deck全てを表示するメソッドを作る
  printDeck() {
    for(let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i].getCardString());
    }
  }
  
  // Deckをシャッフルするメソッドを作る
  shuffleDeck() {
    for(let i = this.deck.length - 1; i >= 0; i--) {
      // シャッフルのためのランダムの数値をjにセット
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }
}

// ディーラーのステートレスオブジェクトを作る
class Dealer {
  // インスタンス化が必要ないので、static を用いた関数だけかく
  static startGame(amountOfPlayers, gameMode) {
    // tableオブジェクトを設定。プレイヤーの手札とゲームの種類、デッキをプロパティとしてもつ
    let table = {
      "playerCards": [],
      "gameMode": gameMode,
      "deck": new Deck()
    }
    // デッキをシャッフルする
    table["deck"].shuffleDeck();

    for(let i = 0; i < amountOfPlayers; i++) {
      let playerCard = [];
      for(let j = 0; j < Dealer.initialCards(gameMode); j++) {
        playerCard.push(table["deck"].draw());
      }
      table["playerCards"].push(playerCard);
    }
    return table;
  }
  
  // ゲームをポーカーに拡張できるようにinitialCardsというメソッドを作る
  static initialCards(gameMode) {
    if(gameMode === "poker") return 5;
    if(gameMode === "21") return 2;
  }

  static printTableInformation(table) {
    console.log(`Amount of players: ${table["playerCards"].length}... Game mode: ${table["gameMode"]}. At this table:`);
    
    for(let i = 0; i < table["playerCards"].length; i++) {
      console.log(`Player ${i + 1} hand is:`);
      for(let j = 0; j < table["playerCards"][i].length; j++) {
        console.log(table["playerCards"][i][j].getCardString());
      }
    }
  }
  
  // ブラックジャックでスコア計算するためのメソッドを追加
  static score21Individual(cards) {
    let value = 0;
    for(let i = 0; i < cards.length; i++) {
      value += cards[i].intValue;
    }
    if(value > 21) value = 0;
    return value;
  }
  
  // ブラックジャックの勝者を表示するためのメソッドを追加
  static winnerOf21(table) {
    let points = [];
    let cache = [];
    
    for(let i = 0; i < table["playerCards"].length; i++) {
      let point = Dealer.score21Individual(table["playerCards"][i]);
      points.push(point);
      if(cache[point] >= 1) {
        cache[point] += 1;
      } else {
        cache[point] = 1;
      }
    }
    let maxIndex = HelperFunctions.maxInArrayIndex(points)
    if(cache[points[maxIndex]] > 1){
      return "draw";
    } else if (cache[points[maxIndex]] >= 0) {
      return `player ${maxIndex + 1} is Win`
    } else {
      return "No winners..";
    }
  }
}

class HelperFunctions {
  static maxInArrayIndex(intArr) {
    let maxNumberIndex = 0;
    let maxNumber = intArr[0];
    for(let i = 1; i < intArr.length; i++) {
      if(intArr[i] > maxNumber) {
        maxNumber = intArr[i];
        maxNumberIndex = i;
      }
    }
    return maxNumberIndex;
  }
}

let table = Dealer.startGame(4, "21");

Dealer.printTableInformation(table);
console.log(Dealer.winnerOf21(table));