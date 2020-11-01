class Invoice {
  constructor(invoiceNumber, invoiceDate, company, companyAddress, billToName, billToAddress) {
    this.invoiceNumber = invoiceNumber;
    this.invoiceDate = invoiceDate;
    this.company = company;
    this.companyAddress = companyAddress;
    this.billToName = billToName;
    this.billToAddress = billToAddress;
    this.invoiceItemHeadNode = null;
  }
}

class InvoiceItemNode {
  constructor(quantity, product) {
    this.quantity = quantity;
    this.product = product;
    this.next = null;
  }
}

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

let invoice = new Invoice("UC1234567890", "2020/05/06", "Recursion", "Los Angles", "Steven", "Dallas"
)

// 購入をスタートする
let itemList = 

// Nodeの先頭に最初の製品を追加する

// 残りの製品にも同様の処理を行う
// 製品同士をつなげる

let invoiceItemNode = new InvoiceItemNode();

let product = new Product();

// 以下の構造に沿った請求書(Invoice)の設計図を作成してください。

// 状態

// string型 invoiceNumber: 請求書番号。"UC-"の後に10桁の数字が続くとします。

// string型 invoiceDate: 請求書が作成された日付。

// string型 company: 会社名

// string型 companyAddress: 会社の住所

// string型 billToName: 請求書先の名前

// string型 billToAddress: 請求書先の住所

// InvoiceItemNode invoiceItemHeadNode: 購入したアイテムのリストの開始を表すInvoiceItemNode。抽象オブジェクトで学習したnodeを参照してください。

// 挙動

// amountDue(bool taxes) -> double型:
// 請求書の支払総額を計算します。InvoiceItemHeadNodeから始まるすべてのリスト項目を反復処理し、数量も考慮して計算する必要があります。Tax inputがtrueに設定されている場合は、合計金額に10%を加算してください。

// printBuyingItems() -> :
// 請求書の全項目と数量を出力します。「item :shampoo, price :10, quantity:7」のようにそれぞれのアイテムを出力してください。

// printInvoice() -> :
// 請求書の全内容を出力します。

// Invoice
// No. : UC1234567890
// INVOICE DATE : 2020/05/06
// SHIP TO : Recursion
// ADDRESS : Los Angles
// BILL TO : Steven
// ADDRESS : Dallas
// shampoo($10)--- 7 pcs. --- AMOUNT: 70
// conditioner($5)--- 9 pcs. --- AMOUNT: 45
// tooth brush($3)--- 10 pcs. --- AMOUNT: 30
// SUBTOTAL : 145
// TAX : 14.5
// TOTAL : 159.5

// のようにそれぞれのアイテムを出力してください。

// InvoiceItemNodeの設計図は以下のようになっています。

// 状態

// int型 quantity: 購入する製品の数を表す

// Product product: 購入される製品に関するすべての情報を含む製品オブジェクト

// InvoiceItemNode next: このノードのInvoiceItemNode

// 挙動

// getTotalPrice():
// 購入する数量に基づいて、製品の合計価格を計算します。

// 製品(Product)は以下のような設計図を持っています。

// 状態

// string型 title: 製品のタイトル。

// double型 price: 製品の価格(ドル)


// 渡すもの

// shampoo, $10, 7pc
// conditioner, $5, 9pc
// tooth brush, $3, 10pc

// invoice
// UC1234567890
// 2020/05/06
// Recursion
// Los Angles
// Steven
// Dallas