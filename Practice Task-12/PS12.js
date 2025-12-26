let DATA = "Secret Information";

class User{
    constructor(name,email){
       this.userName = name;
       this.userEmail = email; 
    }

    viewData(){
        console.log("Data = ", DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "New Data Added By Admin."
    }
}


let stu1 = new User("Zeel Jani","janizeel999@gmail.com");
let stu2 = new User("RJani","rjani123@gmail.com");


let ad1 = new Admin("admin","admin123@gmail.com")