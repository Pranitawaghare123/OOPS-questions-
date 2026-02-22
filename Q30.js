// Create a EcommerceUser class.
// Inherit:

// Buyer

// Seller

class User{
    constructor(name, email,userid){
        this.name=name;
        this.email=email;
        this.userid=userid;
    }
}

class ECommerceUser{
       constructor(user){
        this.items=[]
       }
       addCart(item){
           this.items.push(item)
           console.log("---------------------------------------------------------------------------------")
           console.log(`${item} added to cart`)
          
       }
        removeItem(item){
            this.items=this.items.filter((e)=> e != item)
            console.log("---------------------------------------------------------------------------------")
            console.log(`${item} Remove item`)
            
        }

        showItemOfCart(){
            console.log("---------------------------------------------------------------------------------")
            console.log("Items Of cart")
            console.log("-------------")
            this.items.forEach((e,idx)=>{
                console.log(`${idx} : ${e}`)
            })
        }
}

class Seller extends ECommerceUser{
    constructor(itemsList){
        super()
        this.itemsList=itemsList;
    }
    addItem(items){
        this.itemsList.push(items)
    }

    check(){
        console.log("---------------------------------------------------------------------------------")
        console.log("Product List")
        console.log("----")
        this.itemsList.forEach((element ,idx)=> {
             console.log(`${idx} : ${element}`)
        });
    }
}

class Buyers extends ECommerceUser{
    constructor(user){
        super()
        this.user=user;
        this.wishList=[]
    }
    addWishList(item){
       this.wishList.push(item)
    }
    ShowWishList(){
        console.log("---------------------------------------------------------------------------------")
        console.log(this.user.name+ " Whish list :")
        console.log("-------------------")
        this.wishList.forEach((e,idx)=>{
            console.log(`${idx} : ${e}`)
        })
    }

}

let user=new User("pranita Waghare","1223@gmail.com","pranita123")
let seller=new Seller(["shop","shampoo","footwear","dress"])
let buyer=new Buyers(user)
buyer.addCart("desert")
buyer.addCart("redROses")
buyer.addCart("food")
buyer.showItemOfCart()
buyer.removeItem("food")
buyer.showItemOfCart()
buyer.addWishList("rose")
buyer.addWishList("dog food")
buyer.ShowWishList()

