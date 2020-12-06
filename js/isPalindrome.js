function isPalindrome(stringInput) {
  let baseList = stringInput.replace(/ /g, "").toLowerCase().split("");
  let compareList = [...baseList].reverse();
  return baseList.join("") === compareList.join("");
}

console.log(isPalindrome("Was it a cat I saw"))
