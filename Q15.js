// Create a Teacher class that inherits from Person.
// Add subject property.
class Person{
    constructor(name1,age){
        this.name1=name1;
        this.age=age;
       
        

    }
   
    introduction(){
        console.log(`My name is ${this.name1} and i am ${this.age} old`)
    }
    
}
class Teacher extends Person{
    constructor(name1,age,a1){
     super(name1,age)
     super.introduction()
        this.a1=a1;
       
        
    }
    introduction(){
          console.log(`My name is ${this.name1} and i am ${this.age} old and i am gonna teach ${this.a1} subject from today`)
    }
    
}

let person=new Person("Aditi joshi",29)
let teacher=new Teacher("roy",45,"Css")
teacher.introduction()
person.introduction()