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
  amountDue(taxes) {
    let amountDue = 0;
    let currentNode = this.invoiceItemHeadNode;
    while(currentNode !== null) {
      amountDue += currentNode.product.price * currentNode.quantity
      currentNode = currentNode.invoiceItemNextNode;
    }
    return taxes ? amountDue * 1.1 : amountDue
  } 
  printBuyingItems() {
    let currentNode = this.invoiceItemHeadNode;
    while(currentNode !== null) {
      console.log(`item :${currentNode.product.productName}, price :${currentNode.product.price}, quantity:${currentNode.quantity}`);
      currentNode = currentNode.invoiceItemNextNode;
    }
  }
  printInvoice() {
    let currentNode = this.invoiceItemHeadNode;
    console.log(`
      No. : ${this.invoiceNumber}
      INVOICE DATE : ${this.invoiceDate}
      SHIP TO : ${this.company}
      ADDRESS : ${this.companyAddress}
      BILL TO : ${this.billToName}
      ADDRESS : ${this.billToAddress}
      shampoo($10)--- 7 pcs. --- AMOUNT: 70
      conditioner($5)--- 9 pcs. --- AMOUNT: 45
      tooth brush($3)--- 10 pcs. --- AMOUNT: 30
      SUBTOTAL : ${this.amountDue()}
      TAX : ${this.amountDue() * 0.1}
      TOTAL : ${this.amountDue() * 1.1}
    `)
  }
}

class InvoiceItemNode {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
    this.invoiceItemNextNode = null;
  }
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
  }
}

// まずInvoiceを作る
let invoice = new Invoice("UC1234567890", "2020/05/06", "Recursion", "Los Angles", "Steven", "Dallas");

// それぞれのProductを作る
let shampoo = new Product("shampoo", 10);
let conditioner = new Product("conditioner", 5);
let toothBrush = new Product("toothBrush", 3);

// 連結リストを作る
let firstItem = new InvoiceItemNode(shampoo, 7);
invoice.invoiceItemHeadNode = firstItem;

let secondItem = new InvoiceItemNode(conditioner, 9);
firstItem.invoiceItemNextNode = secondItem;

let thirdItem = new InvoiceItemNode(toothBrush, 10);
secondItem.invoiceItemNextNode = thirdItem;

invoice.printBuyingItems();
invoice.amountDue(true);
invoice.printInvoice();