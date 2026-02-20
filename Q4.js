// Create a Rectangle class with length and width.
// Add methods:

// area()

// perimeter()

class Rectangle{
    constructor(length1,width){
        this.length1=length1;
        this.width=width;
    }
    area(){
      let area=this.length1*this.width
      console.log("Area : ",area)
    }
    perimeter(){
        let perimeter=2*(this.length1*this.width)
        console.log("perimeter : ",perimeter)
    }
}

let rectangle1=new Rectangle(1,2)
rectangle1.area()
rectangle1.perimeter()
