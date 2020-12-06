function tabulationFib(n) {
  let cacheList = [];
  // 全て0の配列を作る
  for(let i = 0; i <= n; i++) {
    cacheList.push(0);
  }
  cacheList[0] = 0;
  cacheList[1] = 1;
  // i=2からnまでループして fn = fn-1 + fn-2を繰り返し計算してcacheListの値を更新する
  for(let i = 2; i <= n; i++) {
    cacheList[i] = cacheList[i - 1] + cacheList[i - 2];
  }
  
  return cacheList[n];
}

console.log(tabulationFib(10));
