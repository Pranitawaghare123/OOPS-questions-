// Create a User class with:

// username

// password
// Add method login().
class User{
    constructor(userName,password){
        this.userName=userName;
        this.password=password;
    }
    login(username,password){
        if(username === this.userName && password ===this.password){
            console.log("Login Successful")
        }else{
            console.log("Login failed")
        }

    }
}

let user=new User("admin","123")
user.login("as",123)
user.login("admin",123)
user.login("admin","123")