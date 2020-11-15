class Car{
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

function printCarArray(carArray){
  for(let i = 0; i < carArray.length; i++) {
    console.log(`${carArray[i].make}-${carArray[i].model}-${carArray[i].year}`)
  }
}

// JSの配列は動的配列です。
// 配列を作成し、3つのオブジェクトを追加します。push(値)メソッドでデータを追加します。
let cars = [];
cars.push(new Car("Toyota", "Camry", 2000));
cars.push(new Car("BMW", "X1 Sports", 2019));
cars.push(new Car("Nissan", "GT-R", 2020));

console.log("First model: " + cars[0].make + " - " + cars[0].model + " Year " + cars[0].year);

// 関数を使ってすべての車を出力します。
printCarArray(cars);