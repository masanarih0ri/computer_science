// ここから書いてください。

// motivationalSpeechWallpaper(phrase, colorCode, imageUrl, verticalPosition, horizontalPosition, domObject)

// まず画像とテキストが表示されるようにする
// bootstrapのclassとかで位置を指定するようなイメージ

/*
<div> relative
  <img>
  <p> absolute
</div>

*/ 

function motivationalSpeechWallpaper(phrase, colorCode, imageUrl, verticalPosition, horizontalPosition, domObject) {
  // 画像の領域
  const wrapDiv = document.createElement("div");
  wrapDiv.classList.add("position-relative");
  const image = document.createElement("img");
  image.src = imageUrl;
  image.classList.add("image")
  wrapDiv.append(image); 
  
  // テキストの領域
  let text = document.createElement("p");
  text.style.color = `#${colorCode}`;
  text.classList.add("position-absolute", "text");
  if(verticalPosition === "top") {
    text.classList.add("verticalTop");
  } else if(verticalPosition === "center") {
    text.classList.add("verticalCenter");
  } else if(verticalPosition === "bottom") {
    text.classList.add("verticalBottom");
  }
  
  if(horizontalPosition === "left") {
    text.classList.add("horizontalLeft");
  } else if(horizontalPosition === "center") {
    text.classList.add("horizontalCenter");
  } else if(horizontalPosition === "right") {
    text.classList.add("horizontalRight");
  }
  text.innerHTML = phrase;
  wrapDiv.append(text);
  
  // targetに対して画像とテキストを入れる
  domObject.append(wrapDiv);
}

// 関数呼び出しの例
let domObj = document.getElementById("target");

motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center", domObj);

motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);

motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);