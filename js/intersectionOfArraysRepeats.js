function intersectionOfArraysRepeats(intList1,intList2){
    //ここから書きましょう
    let hashmap = {};
    // hashmapを{数値: 数値のある数, ...の形にする}
    // ex){1: 2, 2: 4}
    for(let i = 0; i < intList2.length; i++) {
        if(!hashmap[intList2[i]]) {
            hashmap[intList2[i]] = 1;
        } else {
            hashmap[intList2[i]] += 1;
        }
    }
    let results = [];
    // もう一つのリストをループしてhashmapと照合する
    // また、値がある場合はカウント数を減らす
    // intList1の最初から最後までの値を使って照合
    for(let i = 0; i < intList1.length; i++) {
        if(hashmap[intList1[i]] && hashmap[intList1[i]] > 0) {
            results.push(intList1[i]);
            hashmap[intList1[i]] -= 1;
        }
    }
    return results.sort((x, y) => {
        return x - y;
    });
}


console.log(intersectionOfArraysRepeats([3,2,2,2,1,10,10],[3,2,10,10,10]))