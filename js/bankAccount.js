class BankAccount {
  constructor(bankName, ownerName, savings, interestPerDay) {
    this.bankName = bankName;
    this.ownerName = ownerName;
    this.savings = savings;
    this.interestPerDay = interestPerDay;
  }
  
  showInfo() {
    return `bank: ${this.bankName}\nowner name: ${this.ownerName}\nbank account number: ${this.getRandomInteger()}`
  }
  
  getRandomInteger() {
    return Math.floor(Math.random() * 10000);
  }
  
  depositMoney(depositAmount) {
    this.savings <= 20000 ? this.savings += depositAmount - 100 : this.savings += depositAmount;
    return this.savings;
  }
  
  withdrawMoney(withdrawAmount) {
    if(withdrawAmount >= 5000) {
      this.savings -= this.savings * 0.2;
      return this.savings * 0.2;
    } else {
      this.savings -= withdrawAmount;
      return withdrawAmount;
    }
  }
  
  pastTime(days) {
    return this.savings * Math.pow(1 + this.interestPerDay, days)
  }
}

let account = new BankAccount("Chase", "Claire Simmons", 30000, 0.010001);
console.log(account.showInfo());
console.log(account.withdrawMoney(1000));
console.log(account.depositMoney(10000));
console.log(account.pastTime(200));