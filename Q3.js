// Create a Student class with properties name and marks.
// Add a method getGrade() that returns:

// A if marks ≥ 80

// B if marks ≥ 60

// C otherwise

class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
    getGrade(){
        if(this.marks >= 80){
            console.log("Grade A")
        }else if(this.marks>=60){
            console.log("Grade B")
        }else{
            console.log("Grade C")
        }
    }
}

let student1=new Student("Pranita",90)
student1.getGrade()