//二次元配列が与えられるので、最大値を返す、maxValueという関数を作成してください。
function maxValue(arrayOf2d) {
  let curr = arrayOf2d[0][0];
  for(let i = 0; i < array2d.length; i++) {
    for(let j = 0; j < arrayOf2d[i].length; j++) {
      if(arrayOf2d[i][j] >= curr) {
        curr = arrayOf2d[i][j];
      }
    }
  }
  return curr;
}

let array2d = [[1,23,45,666],[33,56,8],[123,3837,777]];
console.log(maxValue(array2d));