class DownloadableProduct {
  constructor(title, description, price, sizeMb, extension) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.sizeMb = sizeMb;
    this.extension = extension;
  }
  
  getFinalPrice(tax) {
    return this.price +  (this.price * tax.federalTax) + (this.price * tax.stateTax) + (this.price * tax.localTax);
  }
}

class Tax {
  constructor(name, federalTax, stateTax, localTax) {
    this.name = name;
    this.federalTax = federalTax;
    this.stateTax = stateTax;
    this.localTax = localTax;
  }
}

let product = new DownloadableProduct("A hero returns - Remastered", "A movie about a hero who saves the world.", 23.5, 13000, "mp4")

let taxLasVegas = new Tax("Las Vegas Taxes", 0.02, 0.05, 0.01);

console.log(product.getFinalPrice(taxLasVegas));