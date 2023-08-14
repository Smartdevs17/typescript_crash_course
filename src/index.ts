let id:number = 5;
let company:string = "this is my company";
let isSubscribed:true = true;
let x:any;

x = 5;

let ids: number[] = [1,2,3,4,5,6,7,8,9,10,11];
let items: any[] = ["Peret",123,true];
//Tuple 
let person: [number,string,boolean,] = [1,"Josh",false];

//Union
let pid: string | number = 1234;

//Enums
enum Direction1{
    Up,
    Down,
    Left,
    Right,
}

//Enums
enum Direction2{
    Up= "Up",
    Down="Down",
    Left="Left",
    Right="Right",
}

//Objects
type UserTypes = {
    id: number,
    name: string,
    isValid: boolean,
    age: number
}

const user: UserTypes = {
    id: 1,
    name: "User1",
    isValid: true,
    age: 35
}

//Type Assertion
let cid: any = 1;
let customerId = <number> cid;
let custId = cid as boolean;
// customerId  = false;

function addNum (x: number, y: number): number{
    return x + y;
}

const subtractNumber = (x: number, y: number): number => {
    return x - y;
}

const errorMessage = (success: boolean,message: String | boolean): void => {
    console.log(success, message);
    
}

//Interface
interface UserInterface {
   readonly id: number;
    title: string;
    desc: string;
    author: string;
    time: Date;
    isPublished?: boolean;
}

let post1: UserInterface = {
    id: 1,
    title: "football",
    desc: "chelsea have impproved recently",
    author: "Gymbeline",
    time: new Date(),
}


interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

//Class
interface StudentInterface {
    id: number;
    name: string;
    login(): string,
}
class Student implements StudentInterface {
   public id: number;
   public name: string;
   private dob?: Date;
   protected age?: number;

    constructor(id: number, name: string,dob?: Date,age?: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.dob = dob;
        console.log(id,name,age,dob);
        
    }

    login(){
        return `${this.name} loggedIn successfully`;
    }
}

//Subclassess
class Prefect extends Student{
    position: string;

    constructor(id: number,name: string,position: string){
        super(id,name);
        this.position = position;
    }
}

let student1 = new Student(1,"bayo",new Date,12);
let student2 = new Student(2,"kunle");
const newPrefect = new Prefect(3,"Princess","Head Girl");


//Arrays
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

const numArray = getArray([1,2,3,4,5,6]);
const strArray = getArray(["mike","john","felix","christin","vero"]);

numArray.push(7);

// console.log("ID",ids);
console.log("Direction1",Direction1);
console.log("Direction2",Direction2);
console.log(user);
errorMessage(true,"data retrieved successfully");
console.log("Post1",post1);
console.log(student1.name,student2.name);
console.log(student2.login());
console.log(newPrefect.name,newPrefect.position);
// console.log(student1.dob);