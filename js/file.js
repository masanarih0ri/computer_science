class File {
  constructor(fileName, fileExtension, content, locked, parentFolder) {
    this.fileName = fileName;
    this.fileExtension = defineFileExtension(fileExtension);
    this.content = content;
    this.locked = locked;
    this.parentFolder = parentFolder;
  }
  
  getLifetimeBandwidthSize() {
    const bandWidthSizeMB = this.content.length * 10;
    if(bandWidthSizeMB >= 1000){
      return `${bandWidthSizeMB / 1000}GB`;
    } else {
      return `${bandWidthSizeMB}MB`;
    }
  }
  
  getFileType() {
    if([".txt", ".pdf", ".word"].includes(this.fileExtension)) {
      return "document";
    } else if ([".js", ".css", ".html"].includes(this.fileExtension)) {
      return "source-code";
    } else if ([".mp4"].includes(this.fileExtension)) {
      return "video";
    } else if ([".mp3"].includes(this.fileExtension)){
      return "music"
    }
  }
  
  prependContent(prependString) {
    if(this.locked) return;
    // prependContentで返すのはthis.contentの先頭にprependStringを付け足したもの
  }
  
  appendContent(appendString) {
    if(this.locked) return;
    // appendContentで返すのはthis.contentの後ろにpappendContentを付け足したもの（最初のthis.contentから見ると、差分はprependStringとappendString）
  }
  
  addContent(addString, position) {
    if(this.locked) return;
    // addContentで返すのは最初のthis.contentのposition番目の位置にaddStringが入ったもの（最初のthis.contentから見ると、差分はprependStringとappendString、addString）
  }
  
  // this.contentを更新していくやり方だと、addContentの時に最初のthis.contentのposition番目の位置にaddStringが入れるのが無理っぽい…？
  
  // this.contentを変更せずに変数にコピーするやり方だとappendContentでprependContentを呼び出す時に引数の定義でエラーになる…
  
  showFileLocation() {
    return `${this.parentFolder} > ${this.fileName}${this.fileExtension}`;
  }
}

function defineFileExtension(fileType) {
  const fileTypes = [".word", ".png", ".js", ".css", ".html", ".mp4", ".mp3", ".pdf"];
  return fileTypes.includes(fileType) ? fileType : ".txt"
}

let file = new File("assignment", ".word","Something that occurs too early before preparations are ready. Starting too soon.", false, "homework");

console.log(file.getLifetimeBandwidthSize());
console.log(file.fileExtension);
console.log(file.getFileType());
console.log(file.prependContent("good morning "));
// console.log(file.appendContent(" good evening."));
console.log(file.addContent("hello world ", 13));
console.log(file.showFileLocation());

// 状態

// string型 fileName: ファイル名

// string型 fileExtension: ファイルの拡張子。.word, .png, .js, .css, .html, .mp4, .mp3, .pdfでない場合は、.txtに設定されます。

// string型 content: ファイルのすべての内容

// boolean型 locked: ファイルの内容を上書きできるかどうかを決めるブーリアン値。trueの場合、コンテンツがロックされており、falseの場合、コンテンツがロックされていないことを示します。

// string型 parentFolder: ファイルが置かれているフォルダの名前

// 挙動

// getLifetimeBandwidthSize() -> string型:
// サービス中に使われるファイルの最大容量を返します。contentに含まれる文字につき、10MBとして計算してください。例えば、1000文字含まれている場合、1000 * 10MB = 10,000MB = 10GBになります。

// getFileType() -> string型:
// オブジェクトのファイルタイプを返します。document(.pdf, .word, .txt)、source-code(.js, .css, .html)、video(.mp4)、music(.mp3)があります。

// prependContent(string data) -> string型:
// もしファイルがロックされていなければ、ファイルのcontentの先頭にデータ文字列を追加し、新しいcontentを返します。

// appendContent(string data) -> string型:
// もしファイルがロックされていなければ、ファイルのcontentの末尾にデータ文字列を追加し、新しいcontentを返します。

// addContent(string data, int position) -> string型:
// もしファイルがロックされていなければ、ファイルのcontentの指定した位置(インデックス)にデータ文字列を追加し、新しいcontentを返します。

// showFileLocation() -> string型:
// 親ファイル > ファイル名.拡張子という形で返します。