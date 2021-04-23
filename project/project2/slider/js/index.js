// 全ての箱の要素を取り出し最初の要素を取得する
let sliderItems = document.querySelectorAll("#target .slider-data .slider-item");
let firstSliderItem = sliderItems[0];
console.log(sliderItems);
console.log(sliderItems[0]);

// スライダーに関する要素を作る
let slideShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

// スライダーに関する要素に対してクラスを付与
slideShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

// スライダーに関する要素に対して必要な要素を追加し、HTMLを構成する
main.append(firstSliderItem);
slideShow.append(main);
slideShow.append(extra);

// targetにHTMLを挿入する
const target = document.getElementById("target");
target.append(slideShow);

// ボタン関連の要素を作成する
let controls = document.createElement("div");
let leftBtn = document.createElement("button");
let rightBtn = document.createElement("button");

// 必要なクラスをそれぞれの要素に付与する
controls.classList.add("offset-5", "mt-2");
leftBtn.classList.add("btn", "btn-light");
rightBtn.classList.add("btn", "btn-light");

// 必要なHTMLの要素を追加する
leftBtn.innerHTML = "<";
rightBtn.innerHTML = ">";

// HTMLの構成を作る
controls.append(leftBtn);
controls.append(rightBtn);

// targetにHTMLを入れる
target.append(controls);

//setAttributeを使ってindexの初期値を設定

// 1か-1を受け取って次の要素を設定するslideJumpという関数を作成