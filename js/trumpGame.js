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
  static startGame(amountOfPlayers) {
    // tableオブジェクトを設定。プレイヤーの手札とデッキを
    let table = {
      "playerCards": [],
      "deck": new Deck()
    }
    // デッキをシャッフルする
    table["deck"].shuffleDeck();

    for(let i = 0; i < amountOfPlayers; i++) {
      let playerCard = [];
      for(let j = 0; j < 2; j++) {
        playerCard.push(table["deck"].draw());
      }
      table["playerCards"].push(playerCard);
    }
    return table["playerCards"];
  }
}

let table1 = Dealer.startGame(5);
console.log(table1)
