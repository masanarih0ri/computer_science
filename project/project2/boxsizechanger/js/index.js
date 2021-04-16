let bodyTag = document.getElementsByTagName("body")[0];
bodyTag.addEventListener("keydown", function(event) {
  console.log(event.key);
  const pBlock = document.getElementById("pBlock");
  const changeOfAmount = 10;
  if(event.key === "ArrowUp") {
    pBlock.style.height = (pBlock.offsetHeight + changeOfAmount) + "px";
  } else if (event.key === "ArrowDown") {
    pBlock.style.height = (pBlock.offsetHeight - changeOfAmount) + "px";
  }
})
