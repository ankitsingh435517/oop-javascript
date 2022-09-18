class BankAccount {
  customerName;
  accountNumber = Date.now();
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Taking business loan: ", amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log("Taking personal loan: ", amount);
  }
}

const ankitSavingAccount = new SavingAccount("Ankit-saving", 100);
ankitSavingAccount.deposit(500)
ankitSavingAccount.withdraw(100)
ankitSavingAccount.takePersonalLoan(250)
console.log(ankitSavingAccount)



// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking business loan: ", amount);
// };

// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking personal loan: ", amount);
// };

// const ankitCurrentAccount = new CurrentAccount("Ankit-current", 1000);
// const ankitSavingAccount = new SavingAccount("Ankit-saving", 100);

// console.log(ankitCurrentAccount);
// console.log(ankitSavingAccount);
