// ts-oop-inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// parent class for student and teachers
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getSleep = function (time) {
        console.log("".concat(this.name, " sleep for ").concat(time, " hours"));
    };
    return Person;
}());
// student class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, address) {
        return _super.call(this, name, age, address) || this;
    }
    return Student;
}(Person));
// create instance of student class
var stn1 = new Student("md zihad", 20, "dhaka");
stn1.getSleep(6);
// teachers class
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, address, designation) {
        var _this = _super.call(this, name, age, address) || this;
        _this.designation = designation;
        return _this;
    }
    Teacher.prototype.takeClass = function (numOfClass) {
        console.log("".concat(this.name, " will take ").concat(numOfClass, " class"));
    };
    return Teacher;
}(Person));
// create a instance for teacher
var teacher1 = new Teacher("md monir", 25, "dhaka", "professor");
teacher1.takeClass(4);
teacher1.getSleep(5);
