// Create a Shape class with method area().
// Inherit it into:

// Square

// Triangle

class Shape{
    area(){
        console.log("area for shape ")
    }
}

class Square extends Shape{
    area(){
    super.area()
    console.log("area from square")
    }

}


class Triangle extends Shape{
    area(){
    super.area()
    console.log("area from triangle")
    }

}

let shape1=new Triangle()
shape1.area()