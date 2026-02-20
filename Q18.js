// Create a Course class with:

// courseName

// duration
// Add method getCourseInfo().
class Course{
    constructor(courseName,duration){
        this.courseName=courseName;
        this.duration=duration;
    }
     getCourseInfo(){
        console.log(`${this.courseName} course will be  completed in ${this.duration} months`)
     }
}
let sub=new Course("Full stack web Development",9)
sub.getCourseInfo()