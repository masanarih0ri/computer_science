function printDuplicates(inputList) {
  let hashmap = {};
  for(let i = 0; i < inputList.length; i++) {
    // inputList[i]がキャッシュされていない場合は値を1としてkeyと一緒に保存
    if(hashmap[inputList[i]] === undefined) {
      hashmap[inputList[i]] = 1;
    } else {
      // キャッシュがされている場合はhashmap[inputList[i]]（=value）に1を足す。これで、「他に同じ要素が存在する」数をカウントする
      hashmap[inputList[i]] = hashmap[inputList[i]] + 1;
    }
  }
  // hashmapのkeyを使ってvalueを呼び出すと、何回重複しているかが判別できるようになった
  // keysを使って、それぞれのvalueを呼び出す
  let keys = Object.keys(hashmap);
  console.log(keys);
  for(let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} has ${hashmap[keys[i]]} duplicates`)
  }
}

printDuplicates([1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,5,6,6,6,6,7,8,8,8,9,9,9]);