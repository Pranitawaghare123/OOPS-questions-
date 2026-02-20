// Create an Employee class with name and salary.
// Add a method increaseSalary(percent).

class Employee{
    constructor(name,salary){
       this.name=name;
       this.salary=salary;
    }
    increaseSalary(Percent){
          let increment=(this.salary*Percent)/100
          let final =this.salary+increment
          console.log(`Your current salary is ${this.salary} ,which is get increase by ${Percent}%  so now your salary will be ${final}`)
    }
}

let emp=new Employee("pranita",100)
emp.increaseSalary(10)