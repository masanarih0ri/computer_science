class LambdaMachine {
  constructor() {
    this.lambdaStorage = [];
    this.handlers = {};
    this.counter = 0;
  }

  insert(key, lambda) {
    if(this.handlers[key] !== undefined) {
      this.lambdaStorage[this.handlers[key]] = lambda;
      return;
    } else {
      this.lambdaStorage.push(lambda);
      this.handlers[key] = this.lambdaStorage.length - 1;
    }
  }

  // 与えられたキーに応じて、ラムダを取得します。キーが存在しなければnull
  retrieve(key){
    return (this.lambdaStorage.length > 0 && this.handlers[key] !== undefined) ? this.lambdaStorage[this.handlers[key]] : null
  }

  // ラウンドロビンスタイルでラムダを選択します。ラムダと、関数が使用する引数を含むオブジェクトを返します。
  roundRobinRetrieve() {
    let l = this.lambdaStorage.length;
    if(!l) return null;

    let index = this.counter % l;
    console.log("Round-Robin retrieval at index: " + index);
    
    this.counter++;
    return this.lambdaStorage[index];
  }

  randomRetrieve() {
    let l = this.lambdaStorage.length;
    if(!l) return null;

    let randomIndex = Math.floor(Math.random() * l);
    console.log("Random retrieval at index: " + randomIndex);
    return this.lambdaStorage[randomIndex];
  }
}

let lambdaMachine = new LambdaMachine();

// 2つの入力と共に、構造体ラムダに挿入します。
lambdaMachine.insert("pythagora", (a,b)=>Math.sqrt(a*a +b*b));
lambdaMachine.insert("addition", (x,y)=>x+y);
lambdaMachine.insert("subtraction", (x,y)=>x-y);
lambdaMachine.insert("multiplication", (x,y)=>x*y);
lambdaMachine.insert("division", (x,y)=>x/y);
lambdaMachine.insert("noises", (x,y)=>x + "-DUM-DUM-DUM-DUM-" + y);

console.log(lambdaMachine.retrieve("pythagora"));
console.log(lambdaMachine.retrieve("pythagora")(3,4));
console.log(lambdaMachine.retrieve("multiplication"));
console.log(lambdaMachine.retrieve("multiplication")(4,10));
console.log(lambdaMachine.retrieve("noises"));
console.log(lambdaMachine.retrieve("noises")(10,15));

lambdaMachine.insert("noises", (x,y)=>x + "BAM-BAM-BAM-BAM" + y);
console.log(lambdaMachine.retrieve("noises")(10,15));

let x = 1;
let y = 10;
 
// ランダムな取得
console.log(lambdaMachine.randomRetrieve()(x,y));
console.log(lambdaMachine.randomRetrieve()(x,y));
console.log(lambdaMachine.randomRetrieve()(x,y));

// ラウンドロビンによる取得
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));
console.log(lambdaMachine.roundRobinRetrieve()(x,y));