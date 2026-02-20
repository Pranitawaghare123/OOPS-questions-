// Create a Product class with:

// name

// price
// Add method applyDiscount(percent).

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    applyDiscount(percent){
        let discount=(this.price*percent)/100
        let final=this.price-discount
        console.log(`Your buying ${this.name} which is originally  ${this.price} but by applying the discount ${percent}% you have to pay ${final}`)
    }
}

let product=new Product("MilkyBar",60)
product.applyDiscount(10)