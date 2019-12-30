var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function cla(person) {
    return 'hello,' + person.firstName +''+person.middleInitial+ ' ' + person.lastName;
}
var claUser = new Student('qiu', 'M', 'hang');
document.body.innerHTML = cla(claUser);
