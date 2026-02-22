// Create a Payment class.
// Inherit:



// CreditCardPayment

// UPIPayment

class User {
    constructor(name, bankAccount, amount) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.amount = amount;

    }
}
class Payment {
    constructor() {
        this.payment = []
    }

    getUser(user, method) {
        this.payment.push({
            name: user.name,
            bankName: user.bankAccount,
            amount: user.amount,
            method: method
        })

    }
    paymentHistory() {
        this.payment.forEach((e) => {
            console.log(`Name : ${e.name}\nBank Account Name : ${e.bankName}\nAmount transfer : ${e.amount}\ntransfer Method : ${e.method}`)
            console.log("----------------------------------------------------------------------------------------------")
        })
    }
}



class CreditCardPayment extends Payment {
    constructor() {
        super()
       
    }
    CreditCard(user) {
        this.getUser(user, "Credit Card");
        this.paymentHistory()
    }
}

class UPIPayment extends Payment {
    constructor() {
        super()
        
    }
    UPIpayment(user) {
        this.getUser(user, "UPI Transfer");
        this.paymentHistory()
    }
}
let payment = new Payment()

let user = new User("Pranita Waghare", "Bank Of india", 6000)
let user2 = new User("Sid Waghare", "Bank Of baroda", 6000)
let creditCard = new CreditCardPayment()
let upiPayment = new UPIPayment()
creditCard.CreditCard(user)
upiPayment.UPIpayment(user2)

payment.paymentHistory()