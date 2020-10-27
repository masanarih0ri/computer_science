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
    const maxWithdrawAmount = this.savings * 0.2;
    if(withdrawAmount >= maxWithdrawAmount) {
      this.savings -= maxWithdrawAmount;
      return maxWithdrawAmount;
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
let account2 = new BankAccount("Bank Of America", "Remy Clay", 10000, 0.010001);
console.log(account.showInfo());
console.log(account.withdrawMoney(1000));
console.log(account.depositMoney(10000));
console.log(account.pastTime(200));

console.log(account2.showInfo());
console.log(account2.withdrawMoney(5000));  //-> 2000
console.log(account2.depositMoney(12000)); //-> 19900
console.log(account2.pastTime(500)); //-> 2882404.7506039334