// Create a GameCharacter class with:

// name

// health
// Add method attack().

class Character{
    constructor(name,health){
        this.name=name;
        this.health=health;
    }
}

class GameCharacter{
    constructor(){
      this.Character=[]
    }

    addCharacter(char){
        this.Character.push({"name":char.name,"health":char.health})
        console.log(`${char.name} character enter in the game with health ${char.health}`)
 }

   attack(char){
    let emp=this.Character.find((e)=> e.name === char.name)

    if(emp && emp.health>=2){
        emp.health-=1;
        console.log(`${emp.name} is attacked your health is ${emp.health}`)
    }else{
          console.log(`${emp.name} is not found or already dead`)
    
    }
   
   }
   
   show(){
     this.Character.forEach((e)=>{
        console.log(e)
    })
   }
}

let game =new GameCharacter()
let char=new Character("alice",5)
let char1=new Character("bob",4)
game.addCharacter(char)
game.addCharacter(char1)
game.attack(char1)
game.attack(char1)
game.attack(char1)
game.attack(char1)
game.attack(char1)
game.attack(char)
game.show()