
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

const ankitAccount = new BankAccount("Ankit");
ankitAccount.deposit(4000);

console.log(ankitAccount);


const johnAccount = new BankAccount("john", 3000);
johnAccount.withdraw(1000);

console.log(johnAccount);