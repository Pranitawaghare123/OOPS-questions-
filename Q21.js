// Create a ShoppingCart class.
// Store products in array.
// Add methods:

// addItem()

// removeItem()

// getTotal()

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class ShoppingCart {
    constructor(items) {
        this.items = []
    }

   addItem(item){
    this.items.push({"name":item.name,"price":item.price})
    console.log(`${item.name} added to cart`)
   }
   removeItem(item){
    this.items=this.items.filter((e)=>e.name !=item.name)
    console.log(`${item.name} remove from cart`)
    console.log(this.items)

   }
   getTotal(){
    let price =this.items.map((e)=> e.price)
    let total=price.reduce((e1,e2)=> e1+e2,0)
    if(total ==0){
     console.log("please add item to get total")
    }else{
    console.log(`${total} your bill `)
    }

   }
}

let shopping=new ShoppingCart()
let item=new Item("shampoo",500)
let item2=new Item("Conditioner",500)
// shopping.addItem(item)
// shopping.addItem(item2)
// shopping.removeItem(item2)
shopping.getTotal()