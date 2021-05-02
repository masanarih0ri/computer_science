const target = document.getElementById("target");
const sliderItems = document.querySelectorAll("#target .slider-data .slider-item");

let slideShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

slideShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

slideShow.append(main);
slideShow.append(extra);
target.append(slideShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);

target.append(controls);

//setAttributeを使ってindexの初期値を設定
main.setAttribute("data-index", "0");

// animationTypeというパラメータを追加
function slideJump(steps, animationType) {
  let index = parseInt(main.getAttribute("data-index"));
  // let currentElement = sliderItems[index];
  let currentElement = sliderItems.item(index);

  index += steps;
  
  if(index < 0) index = sliderItems.length - 1;
  else if(index >= sliderItems.length) index = 0;
  // let nextElement = sliderItems[index];
  let nextElement = sliderItems.item(index);

  main.setAttribute("data-index", index.toString());
  animateMain(currentElement, nextElement, animationType);
}

function animateMain(current, next, animationType) {
  main.innerHTML = "";
  main.append(next);

  extra.innerHTML = "";
  extra.append(current);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");
  
  if(animationType === "right") {
    slideShow.innerHTML = "";
    slideShow.append(extra);
    slideShow.append(main);
  } else if (animationType === "left") {
    slideShow.innerHTML = "";
    slideShow.append(main);
    slideShow.append(extra);
  }
}

leftBtn.addEventListener("click", function(){
  slideJump(-1, "left");
});

rightBtn.addEventListener("click", function(){
  slideJump(+1, "right");
});