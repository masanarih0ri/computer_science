/*
簡易的にするために

Node1 = new Node(1)
Node2 = new Node(2)
Node3 = new Node(3)
があり、
Node1のポインタにNode2、Node2のポインタにNode3、Node3のポインタにはnull
という状態があると仮定する。
状態は以下のように記載する
1(2) 2(3) 3(null)
*/

/*
大まかな考え方
reverse => 最終的にthis.headで参照する、最終的な反転後の連結リストを参照するための変数
this.head => 連結リストの先頭を参照するために使用する
temp => 連結リストを逆向きにする際に、追跡している連結リストの先頭を一時保存するための変数
上記の3つをうまく使って、
1.tempにthis.headを移す
2.this.headを1つ後ろにずらす
3.tempのポインタを逆向きにする
4.reverseを更新
という手順で順番にリストを逆向きにしていく
*/
reverse() {
  // 一番最初の処理
  // reverseを定義して、先頭のNodeをいれる
  let reverse = this.head;
  // this.headの参照先は次のNodeに移る
  // この時点でthis.head は 2(3)を参照
  this.head = this.head.next;
  // 最初にreverseに入れたNodeのポインタにはnullが入る
  // reverseは1(null)というNodeを参照する
  reverse.next = null;
  
  //ここからはthis.headがnullになるまでループを続ける
  while(this.head !== null) {
    // 一旦this.headをtempに入れておき
    let temp = this.head;
    // this.headは次のNodeにしておく 1回目のループでthis.headは3(null)に
    this.head = this.head.next;
    // tempのポインタを逆方向にするため、temp.nextから参照する先をreverse(1(null))に設定
    // この時点でtempは2->1->nullという構造の連結リストになった
    temp.next = reverse;
    // reverseを更新
    reverse = temp;
  }
  // this.headが参照する先は、reverseという逆向きになった連結リスト
  this.head = reverse;
}