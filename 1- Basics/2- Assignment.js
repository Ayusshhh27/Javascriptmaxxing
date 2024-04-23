let data = "my data";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewdata() {
    console.log("some data", data);
  }
}

let s1 = new User("ayush", "ayush@123gmail.com");
let s2 = new User("aman", "aman@234gmail.com");

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editdata() {
    data = "some new data";
  }
}

let admin1 = new Admin("admin", "college@123gmail.com");
admin1.editdata();
admin1.viewdata(); // This will print "some data some new data"
