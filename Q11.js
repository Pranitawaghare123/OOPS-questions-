// Create a Vehicle class with brand.
// Add method drive().
class Vehicle{
    constructor(brand){
        this.brand=brand;
    }
    drive(){
        console.log(`${this.brand} start drive`)
    }

}
let car=new Vehicle("Tata")
car.drive()