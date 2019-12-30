function int(person) {
    return 'hello,' + person.firstName + person.lastName;
}
var use = {
    firstName: 'qiu',
    lastName: 'hang'
};
document.body.innerHTML = int(use);
