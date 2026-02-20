// Create a Mobile class with properties brand and price.
// Add a method getDetails()

class Mobile{
    constructor(brand,price){
        this.brand=brand;
        this.price=price;
    }
    getDetails(){
        console.log("brand Name "+this.brand+"\t price of this model is ",this.price)
    }
}

let model1=new Mobile("oppo",100000)
model1.getDetails()