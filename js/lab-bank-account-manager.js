class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(deposit) {
    if (deposit > 0) {
      this.transactions.push({ type: "deposit", amount: deposit });
      this.balance += deposit;
      return `Successfully deposited $${deposit}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(withdraw) {
    if (withdraw > 0 && withdraw <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: withdraw });
      this.balance -= withdraw;
      return `Successfully withdrew $${withdraw}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = [];
    for (const tx of this.transactions) {
      if (tx.type === "deposit") {
        deposits.push(tx.amount);
      }
    }
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (const tx of this.transactions) {
      if (tx.type === "withdraw") {
        withdrawals.push(tx.amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();


myAccount.deposit(75);
myAccount.deposit(50);


myAccount.withdraw(10);
myAccount.withdraw(5);


myAccount.deposit(20);

console.log(myAccount.checkBalance());