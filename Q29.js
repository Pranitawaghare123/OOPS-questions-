// Create a Vehicle class.
// Inherit:

// ElectricVehicle

// Add battery percentage property.


class Vehicle{
     constructor(name){
        this.name=name;
     }
     start(){
        console.log(`${this.name} have started drive`)
     }
     stop(){
        console.log(`${this.name} have stop drive`)
     }
}
class ElectricVehicle extends Vehicle{
   constructor(name,battery){
    super(name)
    this.battery=battery;
   }
   charge(amount){
    console.log(`${this.name} have started charging`)
    this.battery+=amount
    if(this.battery >=100){
        console.log(`${this.name} vehicle battery is already full`)
        this.battery=100
    }

   }

   showBattery(){
    console.log(`${this.name} have the ${this.battery} battery`)
   }
}

let vehicle=new ElectricVehicle("Tata Punch",90)
vehicle.start()
vehicle.stop()
vehicle.charge(20)
vehicle.showBattery()