//class
class Datax {
  // private

  #name = "Avatar";
  #pass = 200222;
  static type = 'ผู้ใช้งานระบบ'
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
  static showType(){
    console.log("i use myStem")
  }
}

//Math
console.log(Math.)






