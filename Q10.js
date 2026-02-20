// Create a Laptop class with brand and ram.
// Add a method upgradeRam(newRam).
class Laptop{
    constructor(brand,ram){
        this.brand=brand;
        this.ram=ram;
    }
  upgradeRam(newRam){
    console.log(`Old ram of ${this.brand} is ${this.ram}`)
    this.ram=newRam
    console.log(`new ram of ${this.brand} is ${this.ram}`)
  }
}

let lap1=new Laptop("Lenovo",340)
lap1.upgradeRam(450)