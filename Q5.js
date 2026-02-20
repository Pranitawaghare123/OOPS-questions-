// Create a BankAccount class with:

// accountHolder

// balance
// Methods:

// deposit(amount)

// withdraw(amount)

class BankAccount{
    constructor(accountHolder,balance){
        this.accountHolder=accountHolder;
        this.balance=balance
    }

    deposit(amount){
     this.balance+=amount;
     console.log("Account holder name : ",this.accountHolder)
     console.log("Your balance : ",this.balance)
    }
    withdraw(amount){
this.balance-=amount;
 console.log("Account holder name : ",this.accountHolder)
console.log("Your balance : ",this.balance)
    }
}

let user1=new BankAccount("Pranita",100000)
// user1.deposit(100000)
// user1.deposit(2000)
user1.withdraw(2000)