// Create a Animal class with method makeSound().
// Inherit into:

// Dog

// Cat

class Animal{
    makeSound(){
        console.log("Animal Making sound")
    }

}
class Dog extends Animal{


    makeSound(){
        super.makeSound()
        console.log("Dog making sound")
    }
}
class Cat extends Animal{
    
    makeSound(){
        super.makeSound()
        console.log("Cat making sound")
    }
}

let cat =new Cat()
cat.makeSound()