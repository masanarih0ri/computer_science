// heystack: array needle: string
function needleInHaystack(heystack, needle) {
  for(let i = 0; i < heystack.length; i++) {
    if(heystack[i] === needle) {
      return i;
    }
  }
  return -1
}

function printAtIndex(index, words) {
  if(index >= 0 && index < words.length) {
    console.log(`printing: ->${words[index]} <- at index:${index}`);
  } else {
    console.log('index out of scope!');
  }
}

let words = ["Take", "Restaurant", "Family", "Running", "Tea", "Apples"];

printAtIndex(needleInHaystack(words, "Family"),words);
printAtIndex(needleInHaystack(words, "apple"),words);
