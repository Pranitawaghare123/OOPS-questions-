// Create a Hospital class.
// Add method to admit patient.
class Patient{
    constructor(name ,age ,reason){
        this.name=name;
        this.age=age;
        this.reason=reason;
    }
}
class Hospital{
    constructor(Hname){
        this.Hname=Hname;
    }
    admit(patient){
        console.log(`patient name is ${patient.name} and age of patient is ${patient.age} the reason to admit patient is ${patient.reason}  in ${this.Hname}`)
    }
}


let patient=new Patient("Rahul Modi" ,34,"High fever not responding to medicine")
let hospital=new Hospital("Sion hospital")

hospital.admit(patient)