// Create a Circle class with radius.
// Add a method to calculate area.
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    area(){
        console.log("area of circle : ",Math.ceil(Math.PI *(2*this.radius)))
    }
}
let circle=new Circle(20)
circle.area()