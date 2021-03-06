### メモリの割り当て
* メモリ上のある領域を確保して、変数やデータ構造、クラスのインスタンスなどをその領域に保存することを指す


#### メモリの静的割り当て
* メモリの静的割り当てはプログラムが実行される前のコンパイル時に行われる。割り当てられるサイズは固定されていて、静的に割り当てられた変数はプログラムの開始から終了まで存続する。

```javascript

pi = 3.14159265359;

function myFun(){
    console.log(pi);
}

myFun();
```

### メモリのスタック割り当て
* メモリのスタック割り当てはコールスタック内に新しいスタックが作成されるたびに実行される。（コールスタックとはサブルーチンに関する情報を一時的に保管するところ）

* 関数が呼び出されると新しいスコープがスタックにプッシュされ、変数はそのデータをこの空間に格納する

* 呼び出しスタックがこのスコープをポップ（削除）すると全ての変数とそのデータはクリアされる

* これは、変数の格納されたメモリ上のスタック領域が空になってアクセスできなくなり、スコープに紐づけられた名前も消えることを意味する

* これらの変数の有効期間を制御することはできないので自動メモリ割り当てとも呼ばれる

### ヒープ割り当て
* スタックメモリが自動的に割り当てられるメモリ領域であるのに対し、ヒープメモリはユーザーがいつでも割り当てることのできるメモリ領域。

* ヒープ割り当ては動的に実行されるので動的メモリ割り当てとも呼ばれる

* ヒープメモリはスタックメモリとは完全に分離していて、関数がスタックからポップされても、メモリアドレスとその内容が空になることはない

* ヒープメモリの大きな問題は、メモリの割り当てをユーザーが管理する責任があること

* ユーザーがヒープ割り当てを削除し忘れて、そのメモリが二度と使われない状態をメモリリークという

* ほとんどの言語では、インタプリタやコンパイラがメモリリークを回避する処理を行う。

* 使用しなくなったメモリをヒープメモリから自動的に削除する処理はガベージコレクタと呼ばれる