// Create a HotelRoom class.
// Add method bookRoom() and checkout().

class HotelRoom {
    constructor(hotelName){
        this.hotelName=hotelName;
        this.guest=[]
    }
    bookRoom(guest){
    //   this.guest.push({name:guest.name,room:guest.room ,dateOfCheckIn:guest.dateOfCheckIn ,timeCheckIn:guest.checkInTime,dateOfCheckout:guest.dateOfCheckout ,timeCheckout:guest.checkoutTime,guestNo:guest.guestNo})
    this.guest.push(guest)
      console.log(`Welcome to ${this.hotelName} ,Your have book the ${guest.room} under the name ${guest.name} your check in time is ${guest.dateOfCheckIn} ${guest.checkInTime} and check out time is ${guest.dateOfCheckout} at ${guest.checkoutTime} ,have ${guest.guestNo} `)
      console.log("---------------------------------------")
      
    }
    
     checkout(guest){
           console.log("---------------------------------------")
        console.log(`${guest.name} has checked out, Thank you for visiting`)
        this.guest=this.guest.filter((e)=>e.name !==guest.name)
     }
     show(){   
        console.log("---------------------------------------")
        console.log("Staying list of Guest")
           console.log("---------------------------------------")
        this.guest.forEach((e)=>{
            console.log(`${e.name} staying in room ${e.room} with ${e.guestNo} guest `)
            ".........................................."

        })

        
     }
}
class Guest{
    constructor(name,room,dateOfCheckIn,checkInTime,dateOfCheckout,checkoutTime ,guestNo){
        this.name=name;
        this.room=room;
        this.dateOfCheckIn=dateOfCheckIn;
        this.checkInTime=checkInTime;
       this.dateOfCheckout=dateOfCheckout;
        this.checkoutTime=checkoutTime;
        this.guestNo=guestNo;
    }
}

let hotel =new HotelRoom("Vacation palace") 
let guest=new Guest("pranita waghare",302,"9/3/26","12:30 AM ","12/3/26","4:50 PM",4)
let guest2=new Guest("Sid waghare",303,"9/3/26","12:30 AM","12/3/26","4:50 PM",4)
hotel.bookRoom(guest)
hotel.bookRoom(guest2)
hotel.show()
hotel.checkout(guest)
hotel.show()