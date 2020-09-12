### 再帰の処理について
* 再帰の呼び出しが処理される時、関数の呼び出しは優先度が高く、他のほとんどの演算子よりも先に処理される。

```
simpleSummation(3)
               
3 + simpleSummation(2)
               
3 + (2 + simpleSummation(1))
               
3 + (2 + (1 + simpleSummation(0)))
               
3 + (2 + (1 + 0))
               
3 + (2 + 1)
               
3 + 3
               
6
```

* 再帰の関数の呼び出しでは最後の関数の呼び出しが最初に評価されるようになっている。上の例では **simpleSummation(0)が一番最初に評価される。** そのあとは関数の呼び出しは逆方向に評価されていく。

この特定の連続（シーケンス）は後入れ先出しデータ構造、LIFO（Last In First Out）データ構造、あるいはスタックと呼ばれる。

もう少し具体的にいうと、
* まずはベースケースまで行ったあと、simpleSummation(0)に0が返される。
* それによって、1 + simpleSummation(0)が計算でき、それ(値1)がsimpleSummation(1)のreturnになる。
* さらにそれによって、2 + simpleSummation(1)が計算でき、その値(3)がsimpleSummation(2)のreturnになる。
* 最後にそれによって、3 + simpleSummation(2)が6を返す。

というイメージ

