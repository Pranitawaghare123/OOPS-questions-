// Create a Bike class that inherits from Vehicle.
// Add a method wheelie().

class Vehicle{
    constructor(brand){
        this.brand=brand;
    }
    wheelie(){
        console.log(`${this.brand} start wheelie`)
    }

}
let car=new Vehicle("RTR")
car.wheelie()