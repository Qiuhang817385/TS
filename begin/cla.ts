(function() {
  class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }

  interface Person {
    firstName: string;
    lastName: string;
  }

  function cla(person: Person) {
    return "hello," + person.firstName + " " + person.lastName;
  }
  let claUser = new Student("qiu", "M", "hang");

  document.body.innerHTML = cla(claUser);
})();
