// Create a Admin class that inherits from User.
// Add method deleteUser().
class User{
    constructor(name,role){
          this.name=name;
        this.role=role;
        this.user=[]
    }
    show(){
        this.user.forEach((e)=>{
            console.log(e)
            console.log(`name :${e.name}\nrole :${e.role}`)
        })
        
    }
    add(){
        this.user.push({name:this.name,role:this.role})
    }
    deleteUser(name){
        console.log(name)
    this.user=this.user.filter(e=>e.name!== name)
    console.log(`${name } this user is deleted`)

    }

}
class Admin extends User{
    constructor(name,role){
        super(name,role)
         super.add()
    
     
    }
}
let user=new User("Pranita waghare","web/frontend Developer")
let admin=new Admin("Pranita2 waghare","frontend Developer")
user.add()
user.show()
admin.add()
admin.show()
admin.deleteUser("Pranita waghare")
user.show()