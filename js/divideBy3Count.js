function divideBy3CountHelper(number, count) {
  if(number / 3 < 1) {
    return count;
  }
  return divideBy3CountHelper(number / 3, count + 1);
}

function divideBy3Count(number) {
  return divideBy3CountHelper(number, 0)
}

console.log(divideBy3Count(81))
