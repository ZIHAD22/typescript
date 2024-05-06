// ts-oop-inheritance

// parent class for student and teachers

class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(time: number) {
    console.log(`${this.name} sleep for ${time} hours`);
  }
}

// student class
class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

// create instance of student class
const stn1 = new Student("md zihad", 20, "dhaka");
stn1.getSleep(6);

// teachers class
class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass} class`);
  }
}

// create a instance for teacher
const teacher1 = new Teacher("md monir", 25, "dhaka", "professor");
teacher1.takeClass(4);
teacher1.getSleep(5);
