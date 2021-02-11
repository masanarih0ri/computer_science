let arr = [34,4546,32,3,2,8,6,76,56,45,34,566,1];

function mergeSort(arr) {
    return mergeSortHelper(0, arr.length - 1, arr);
}

function mergeSortHelper(start, end, array) {
    if(start === end) return [array[start]];
    let middle = Math.floor((start + end) / 2);
    let leftArray = mergeSortHelper(start, middle, arr);
    let rightArray = mergeSortHelper(middle + 1, end, arr);

    // Infinityを要素に入れておくことで比較のためのループを回せるようにする
    leftArray.push(Infinity);
    rightArray.push(Infinity);

    // 結合後の配列を空配列でセットしておく
    let combinedArray = [];

    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex + rightIndex < leftArray.length + rightArray.length - 2) {
        if(leftArray[leftIndex] <= rightArray[rightIndex]) {
            combinedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            combinedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return combinedArray;
}

console.log(arr);
console.log(mergeSort(arr));