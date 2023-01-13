console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(removeHobby) {
    let myIndex = this.hobbies.indexOf(removeHobby);
    this.hobbies.splice(myIndex, 1);
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

//exercise 2

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Dev";
  }

  greeting() {
    console.log("We still have a lot more to learn..");
  }
}

//exercise 3

const personObject = new Person("Silas", 1, "Socal", [
  "Music Maker",
  "Camping",
  "Biking",
]);

personObject.removeHobby("Music Maker");
console.log(personObject.hobbies);

personObject.addHobby("Walking dogs");
console.log(personObject.hobbies);

const coderObject = new Coder("Silas", 3, "Nocal", ["Driving", "guitar"]);
console.log(coderObject);

//exercise 4

class Calculator {
  constructor() {
    // this.result = 0
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    this.result = a / b;
    return this.result;
  }

  displayResult() {
    console.log(`Current result is:  ${this.result}`);
  }
}

const myCalculator = new Calculator();

console.log(myCalculator.add(10, 15));
console.log(myCalculator.subtract(20, 10));
console.log(myCalculator.multiply(5, 5));
console.log(myCalculator.divide(10, 5));
myCalculator.displayResult();
