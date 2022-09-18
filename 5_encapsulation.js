class BankAccount {
  customerName;
  accountNumber = Date.now();
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount){
    if(isNaN(amount)){
        throw new Error("amount should be a number");
    }
    this.#balance = amount;
  }

  get balance(){
    return this.#balance;
  }
}


class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  #calculateInterest(amount){
    console.log("Calculating interest: ", amount);
  }

  takeBusinessLoan(amount) {
    this.#calculateInterest(amount);
    console.log("Taking business loan: ", amount);
  }
}

const ankitAccount = new CurrentAccount("Ankit", 2000);
// ankitAccount.balance = 500;
ankitAccount.takeBusinessLoan(40000);