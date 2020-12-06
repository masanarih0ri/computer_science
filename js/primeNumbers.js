// エラトステネスのふるいを使ってNまでの数値の中にある素数を全て表示する
// エラトステネスのふるいは√Nまでの値を使ってそれぞれの倍数を削除していく
// step1.サイズnのブーリアン値trueのリストを生成
// step2.最初の素数を2と設定する
// step3.1~nの中から2で割り切れるものを全てfalseにする
// step4.素数3に対しても同じ処理を行う
// step5.これを√nまで繰り返す
// step6.キャッシュ内に残った全てのtrueの値のインデックスは素数になります。

function primeNumberList(n) {
  // step1
  let cacheList = [];
  for(let i = 0; i < n; i++) {
    cacheList.push(true);
  }
  // n = 10の時、素数は2,3,5,7の4つ
  // [true,true,true,true,true,true,true,true,true,true]
  
  
  // step2-5 currentPrimeを2（最初の素数）に設定
  // n = 10なのでMath.ceil(Math.sqrt(n))は4となる
  // currentPrimeは2,3と動く
  // 2の時
  // checkNumber=4からスタート
  // 4は10より小さいので
  // cacheList[4]はfalseになる
  // [true,true,true,true,false,true,true,true,true,true]
  // 次にiが3となり、checkNumber=6となるので
  // cacheList[6]はfalseになる
  // [true,true,true,true,false,true,false,true,true,true]
  // 次にiが4となり、checkNumber=8となるので
  // cacheList[8]はfalseになる
  // [true,true,true,true,false,true,false,true,false,true]
  // 次にiが5となり、checkNumber=10となるので、一度whileループを抜ける
  // 次にcurrentPrimeが3になり、i=2なのでcheckNumber=6となる
  // cacheList[6]=falseとなる（すでになっている）
  // 次にi=3となりcheckNumber=9となる
  // cacheList[9]=falseとなる
  // [true,true,true,true,false,true,false,true,false,false]
  // 最終的にcacheList[i]がtrueの場合はiの値をprimeNumbersにpushする
  for(let currentPrime = 2; currentPrime < Math.ceil(Math.sqrt(n)); currentPrime++) {
    let i = 2;
    let checkNumber = i * currentPrime;
    while(checkNumber < n) {
      cacheList[checkNumber] = false;
      i++;
      checkNumber = i * currentPrime;
    }
  }
  
  let primeNumbers = [];
  for (let i = 2; i < cacheList.length; i++){
    if (cacheList[i]){
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

console.log(primeNumberList(10));