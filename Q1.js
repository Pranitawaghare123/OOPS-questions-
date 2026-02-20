// Create a Person class with properties name and age.
// Create a method introduce() that prints name and age
class  Person{
      constructor(name,age){
        this.name=name;
        this.age=age;
      }
      introduction(){
        console.log("Name : ",this.name)
        console.log("Age :",this.age)
      }
}

let smith=new Person("Smith",55)
smith.introduction()