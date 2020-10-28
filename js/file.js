class File {
  constructor(fileName, fileExtension, content, locked, parentFolder) {
    this.fileName = fileName;
    this.fileExtension = fileExtension;
    this.content = content;
    this.locked = locked;
    this.parentFolder = parentFolder;
  }
}

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