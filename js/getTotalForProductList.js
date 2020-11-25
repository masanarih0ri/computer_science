// では、2次元配列を具体例で見てみましょう。Amazonなどのウェブサイトで、商品を購入する際、カート決済で、個々の州税、連邦税、輸入税、クーポン割引などを計算する処理を、double型を持つ配列を使って考えてみます。

// メインの配列には、各商品を格納します。個々の製品を表す配列には、商品の価格を最初のスロットに格納し、残りのスロットにはクーポン割引、各製品の州税、連邦税、輸入税を表す、%を格納します。反復処理を行って、各商品の価格を計算し、商品の総額に加算します。

function getTotalForProductList(product2dPriceList) {
  let totalPrice = 0;
  for(let i = 0; i < product2dPriceList.length; i++) {
    let currentProdBasePrice = product2dPriceList[i][0];
    let couponDiscountAndTaxPerCent = 0 
    for(let j = 1; j < product2dPriceList[i].length; j++) {
      couponDiscountAndTaxPerCent += product2dPriceList[i][j];
    }
    console.log(`current item total price is ${currentProdBasePrice * (1 + couponDiscountAndTaxPerCent)}`);
    totalPrice += currentProdBasePrice * (1 + couponDiscountAndTaxPerCent);
  }
  return totalPrice;
}

// 商品の配列
// [商品の価格, クーポン割引, 各製品の州税, 連邦税, 輸入税]
// 計算としては (商品の価格) * (1 + クーポン割引率 + 州税率 + 連邦税率 + 輸入税率)
let product1 = [100, 0.1, 0.02, 0.03, 0.02]
let product2 = [50, -0.5, 0.1, 0.05, 0.02]
let product3 = [34, 0.05, 0.2, 0.03, 0.1]
let product4 = [10, -0.2, 0.3, 0.05, 0.03]

let shoppingCartArray = [product1, product2, product3, product4];
console.log(getTotalForProductList(shoppingCartArray));