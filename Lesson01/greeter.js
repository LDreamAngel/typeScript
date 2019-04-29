//类的概念
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "kim", lastName: "Green" };
console.log(greeter(user));
document.body.innerHTML = JSON.stringify(greeter(user));
var student = new Student("李", "M", "Q");
console.log(student);
// document.body.innerHTML = JSON.stringify(student);
