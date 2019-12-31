(function() {
  interface Person {
    firstName: string;
    lastName: string;
  }

  function int(person: Person) {
    return "hello," + person.firstName + person.lastName;
  }
  let use = {
    firstName: "qiu",
    lastName: "hang"
  };

  document.body.innerHTML = int(use);
})();
