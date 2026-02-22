// Create a Account class.
// Inherit:

// SavingsAccount

// CurrentAccount



class Account{
    constructor(NameHolder, balance){
         this.NameHolder=NameHolder;
         this.balance=balance;
    }
    
    deposit(money){
     this.balance+=money
     console.log(`${this.NameHolder} have deposit the ${money} now your balance is ${this.balance}`)
    }
    withdraw(money){
      this.balance-=money
      console.log(`${this.NameHolder} You have withdraw the ${money} now your balance is ${this.balance}`)
      return money
    }
}

class SavingsAccount extends Account{
     constructor(NameHolder, balance){
        super(NameHolder, balance)
    }
      interestRate(){
        if(this.balance >25000){
            console.log(this.NameHolder+" will get 2% interest as your account has more then 25000 balance")
        }else{
            console.log(this.NameHolder+" don't get any interest as you don't have balance more then 25000")
        }
      }
}

class CurrentAccount extends Account{
   constructor(NameHolder, balance){
        super(NameHolder, balance)
    }
      overdraftLimit(money){
        if(money >25000){
            console.log("You Cannot Withdraw more money as your account has cross the limit of windrowing the  25000 in a day")
        }else{
            console.log("You can withdraw")
            if(this.balance < money){
                console.log(`inefficient  balance !`)
            }else{
                this.withdraw(money)
            }
        }
      }

}
let saving=new SavingsAccount("Pranita Waghare",500)
saving.deposit(200)
saving.withdraw(400)
saving.interestRate()

let current=new CurrentAccount("sid waghare",600000)
current.deposit(400)
current.withdraw(100)
current.overdraftLimit(400)