function shuffledPositions(arr,shuffledArr){
    //ここから書きましょう
    let map = new Map();
    let result = [];

    for(let i = 0; i < shuffledArr.length; i++) {
        map.set(i, shuffledArr[i]);
    }

    // map.get(0)  => 45
    // map.get(1)  => 32
    // map.get(2) => 2
    for(let i = 0; i < shuffledArr.length; i++) {
      result.push(arr.indexOf(map.get(i)))
    }
    return result;
}

console.log(shuffledPositions([2,32,45],[45,32,2]));

// shuffledPositions([2,32,45],[45,32,2]) --> [2,1,0] 