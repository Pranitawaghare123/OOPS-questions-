// Create a Company class with employees array.
// Add method to calculate total salary expense.

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
}


class Company{
    constructor(){
        this.empArr=[]
    }
    addEmployee(emp){
        this.empArr.push({"Name":emp.name,salary:emp.salary})
        console.log(`${emp.name} employee is added in system`)
    }

    TotalExpense(){
        let total =this.empArr.reduce((sum,emp)=> sum  + emp.salary , 0)
        console.log(`Company Total Expense is ${total}`)
    }
}

let emp=new Employee("Pranita Waghare ",40000000)
let emp2=new Employee("Yogita Ghumare ",40000000)
let comp=new Company()
comp.addEmployee(emp)
comp.addEmployee(emp2)
comp.TotalExpense()