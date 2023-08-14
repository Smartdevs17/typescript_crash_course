"use strict";
let id = 5;
let company = "this is my company";
let isSubscribed = true;
let x;
x = 5;
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let items = ["Peret", 123, true];
//Tuple 
let person = [1, "Josh", false];
//Union
let pid = 1234;
//Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
//Enums
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "User1",
    isValid: true,
    age: 35
};
//Type Assertion
let cid = 1;
let customerId = cid;
let custId = cid;
// customerId  = false;
function addNum(x, y) {
    return x + y;
}
const subtractNumber = (x, y) => {
    return x - y;
};
const errorMessage = (success, message) => {
    console.log(success, message);
};
let post1 = {
    id: 1,
    title: "football",
    desc: "chelsea have impproved recently",
    author: "Gymbeline",
    time: new Date(),
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Student {
    constructor(id, name, dob, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.dob = dob;
        console.log(id, name, age, dob);
    }
    login() {
        return `${this.name} loggedIn successfully`;
    }
}
//Subclassess
class Prefect extends Student {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
let student1 = new Student(1, "bayo", new Date, 12);
let student2 = new Student(2, "kunle");
const newPrefect = new Prefect(3, "Princess", "Head Girl");
//Arrays
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4, 5, 6]);
const strArray = getArray(["mike", "john", "felix", "christin", "vero"]);
numArray.push(7);
// console.log("ID",ids);
console.log("Direction1", Direction1);
console.log("Direction2", Direction2);
console.log(user);
errorMessage(true, "data retrieved successfully");
console.log("Post1", post1);
console.log(student1.name, student2.name);
console.log(student2.login());
console.log(newPrefect.name, newPrefect.position);
// console.log(student1.dob);
