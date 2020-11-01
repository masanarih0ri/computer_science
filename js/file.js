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
    this.content = prependString + this.content;
    return this.content;
  }
  
  appendContent(appendString) {
    if(this.locked) return;
    this.content += appendString;
    return this.content;
  }
  
  addContent(addString, position) {
    if(this.locked) return;
    return `${this.content.slice(0, position)}${addString}${this.content.slice(position)}`;
  }
  
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
console.log(file.getFileType());
console.log(file.prependContent("good morning "));
console.log(file.appendContent(" good evening."));
console.log(file.addContent("hello world ", 13));
console.log(file.showFileLocation());