//class
class User {
  // private

  #name = "Avatar";
  #pass = 200222;
  static database = [];
  //parameter constructor
  constructor(n, p) {
    this.#name = n;
    this.#pass = p;
  }
  //Method
  showDetail() {
    console.log(`ชื่อผุ้ใช้งาน ${this.#name} ,รหัสผ่าน ${this.#pass}`);
  }
  //setter
  set Name(newName) {
    this.#name = newName;
  }
  set Pass(newPass) {
    this.#pass = newPass;
  }
  //getter
  get Name() {
    return this.#name;
  }
  get Pass() {
    return this.#pass;
  }
  static addUser(newUser) {
    this.database.push(newUser);
  }
}

class Teacher extends User {
  #course;
  constructor(n, p, course) {
    super(n, p);
    this.#course = course;
  }

  showDetail() {
    console.log("ฉันเป็นคุณครู" + this.#course);
  }
}

class Student extends User {
  #score;
  constructor(n, p, score) {
    super(n, p);
    this.#score = score;
  }
  showDetail() {
    console.log("I am student" + this.#score+ "คะแนน");
  }
}

const user1 = new Teacher("kong", 1234, "เขียนโปรแกรม");
user1.showDetail();
const user2 = new Student("Jojo", 7890, 75);
user2.showDetail();
