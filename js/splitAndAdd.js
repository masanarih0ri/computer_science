function splitAndAdd(number) {
  if(number <= 0) {
    return 0;
  }
  return number % 10 + splitAndAdd(Math.floor(number / 10));
}

console.log(splitAndAdd(1066));