function sumPrimeNumber(n) {
  // 全てtrueの配列を作る
  // あとでindexを使って数値を表現するのでnの値まで作っておく
  let cacheList = [];
  for(let i = 0; i <= n; i++) {
    cacheList.push(true)
  }
  // 素数を2から初めて、1ずつ増やしていく。計算に使う最大値は√nとする
  for(let currentPrimeNumber = 2; currentPrimeNumber < Math.ceil(Math.sqrt(n)); currentPrimeNumber++) {
    // 素数の倍数をfalseにしていく
    // まずindexの値を2にして、notPrimeNumberをiとcurrentPrimeNumberの積とする
    let i = 2;
    let notPrimeNumber = i * currentPrimeNumber;
    // notPrimeNumberがnを超えない時にループを回す
    // ループが止まるまで、cacheListのcurrentPrimeNumber番目をfalseにする
    // iとnotPrimeNumberを更新して処理を続ける
    while(notPrimeNumber < n) {
      cacheList[notPrimeNumber] = false
      i++;
      notPrimeNumber = i * currentPrimeNumber
    }
  }
  // 素数の入る配列を作る
  let primeNumbers = []
  for(let i = 2; i < cacheList.length; i++) {
    if(cacheList[i]) {
      primeNumbers.push(i)
    }
  }
  
  let sumOfPrimeNumber = 0;
  for(let i = 0; i < primeNumbers.length; i++) {
    sumOfPrimeNumber += primeNumbers[i];
  }
  
  return sumOfPrimeNumber
}


console.log(sumPrimeNumber(11))