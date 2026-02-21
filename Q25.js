// Create a School class.
// Store students in array.
// Add method to find topper.
class Student{
    constructor(name,mark){
        this.name=name;
        this.mark=mark;
    }
}
class School{
    constructor(){
        this.studentArr=[]
    }
    add(student){
       this.studentArr.push({name:student.name,mark:student.mark})
    }
    show(){
        this.studentArr.forEach((e)=>{
            console.log(`name :${e.name}\nmarks :${e.mark}`)
        })

    }
    toper(){
        let marks=this.studentArr.map((e1)=> e1.mark)
        let topperMarks=0
         for(let i=0;i<marks.length;i++){
            if(marks[i]>topperMarks){
                topperMarks=marks[i]
            }
         }
         let topperUser=this.studentArr.find((e)=>e.mark === topperMarks)
         console.log(topperUser)
    }
}

let student=new Student("Pranita",98)
let student2=new Student("Pranit",90)
let school=new School()
school.add(student)
school.add(student2)
school.show()
school.toper()