// クラスはデータ構造の設計図を定義する一方、インスタンスはそのクラスのオブジェクトであり、そのクラスの具体的なデータを表現します。

// オブジェクト内では、メンバ変数はオブジェクトの状態を表し、メソッドはそのオブジェクトで利用可能な動作を表します。インスタンスを作成する際、コンストラクタと呼ばれる初期化関数によってメンバ変数が初期化されます。その後、メソッドを使うことによって、オブジェクトの状態を変更することができます。

// これはクラス
class Person {
  // これはメンバ変数
  constructor(firstName, lastName, heightM, weightKg, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.heightM = heightM;
    this.weightKg = weightKg;
    this.age = age;
  }
  // こればメソッド。オブジェクトの状態を変更することができる。
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 状態を変更するメソッド
// 引数にobjectを取る
function changeName(person) {
  person.firstName = "hoge";
  person.lastName = "fuga";
  return person.getFullName();
}

// インスタンス化したオブジェクト。クラスの具体的なデータを表現
let someone = new Person("taro", "tanaka", 177, 72, 33);

// コンストラクタが呼ばれると、その中にあるオブジェクトにヒープメモリが割り当てられ、そのヒープメモリのアドレスが返されます。コンストラクタはthisやselfキーワードを使用して、ヒープ内のオブジェクト自身を指す現在のオブジェクト参照（オブジェクトのメモリアドレス）を取得し、これによってオブジェクトの状態を変更することができます。

// オブジェクトのインスタンスが作成されるたびに、その参照を変数に格納することによって、そのオブジェクトの状態や挙動にアクセスできるようになります。これをオブジェクト参照と呼び、参照型として知られている理由でもあります。

// jsではヒープメモリのメモリアドレスの参照はできないがPerson@36baf30cみたいな感じでメモリアドレスが設定されていて、そのメモリアドレスを取得するためにthisを使って、this.ageとかthis.firstNameとかにアクセスし、データを表示したり変更したりする。

console.log(someone);
console.log(someone.getFullName());


// 実パラメータにはオブジェクト参照が含まれている
// メモリアドレスは値渡しの方法で呼び出し元の仮パラメータにコピーされる

changeName(someone);

// オブジェクト参照はヒープ領域内のアドレスなのでどのスコープからもアクセスできる
// 別のスコープで発生したオブジェクトの更新は呼び出し元のスコープが終了しても残り続ける
// オブジェクト自体はコピーされないのでヒープ内のオブジェクトの状態への変更は全て残る

// 今回でいうとchangeName(someone)でsomeoneというオブジェクトの中身を参照して変更する
// で、オブジェクトそのもの（someone）はコピーされているわけではないので、ヒープ内のオブジェクトの状態（今回はfirstName, lastName）への変更は全て残ったままとなり、someoneのデータが書き換わる

console.log(someone);
console.log(someone.getFullName());

// まずはオブジェクトを作る
// オブジェクト自体はヒープメモリに格納されていて、変数（下記でいうとCarly）の中に格納されているものがオブジェクト参照(メモリアドレス)です。
let carly = new Person("Carly", "Angelo", 1.72, 85.5, 1996);

console.log(carly);
console.log(carly.getFullName());

// オブジェクト参照は値渡しで渡されます。しかし、これはオブジェクトそのものをコピーして処理をするのではなく、そのメモリアドレスを呼び出し元の仮パラメータにコピーするだけです。
console.log(changeName(carly));

// carlyはもう存在しなくなったのでしょうか? 副作用によりオブジェクトの状態に変化が起きました。
console.log(carly.getFullName());