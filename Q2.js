// Create a Car class with properties brand and model.
// Add a method start() that prints “Car started”.
class Car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    start(){
        console.log("Car started")
    }
}
let car1=new Car("swift","Breaza")
car1.start()