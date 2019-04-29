//类的概念
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

//接口
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person:Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let user = { firstName: "kim", lastName: "Green" };
console.log(greeter(user));
document.body.innerHTML = JSON.stringify(greeter(user));

let student = new Student("李","M","Q");
console.log(student);
// document.body.innerHTML = JSON.stringify(student);

