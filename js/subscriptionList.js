// メールアドレスリストemailListが与えられるので、正しく利用できるメールアドレスだけを配列として返すsubscriberListCheckという関数を定義してください。
// - スペースがないこと
// - 「@」を1つのみ含んでいること
// - 「@」の後に「.」があること
function subscriberListCheck(emailList){
  //ここから書きましょう
  let validEmailList = [];
  const reg = /\S\w+([-+.]\w+)*@{1}\w+([-.]\w+)*\.\S\w+([-.]\w+)*/;

  for(let i = 0; i < emailList.length; i++) {
    if(reg.test(emailList[i]) && emailList[i].match(/@/g).length === 1) {
      validEmailList.push(emailList[i])
    }
  }
  return validEmailList;
}
// console.log(reg.test(str))
console.log(subscriberListCheck(["ccc@aaa.com","c@cc@aaa.com","cc c@aaa.com","cc.c@aaa.com"]));
// console.log(subscriberListCheck("c@cc@aaa.com"));