function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

const ankitAccount = new BankAccount("Ankit");
const johnAccount = new BankAccount("John");

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

ankitAccount.deposit(2000);

ankitAccount.withdraw(1000);
console.log(ankitAccount);
