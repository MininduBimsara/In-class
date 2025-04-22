var x = "5" + 1;
var y = "5" - 1;
console.log(y); // 4
console.log(x); // 51

console.log(1 === "1"); // false
console.log(1 == "1"); // true

var person = [];
var person1 = { name: "John", age: 25, profession: "Software Developer" };
var person2 = { name: "Jane", age: 22, profession: "Doctor" };
var person3 = { name: "Jim", age: 18, profession: "Software Developer" };
var person4 = { name: "Jill", age: 17, profession: "Teacher" };
console.log(person1); // { name: 'John', age: 25, profession: 'Software Developer' }
console.log(person1.name); // John

person.push(person1, person2, person3, person4);

var i = 0;
while (i < person.length) {
  if (person[i].age > 18 && person[i].profession === "Software Developer") {
    console.log("Person is an adult and a Software Developer");
  } else {
    console.log("Person is not an adult or not a Software Developer");
  }
  i++;
}

function checkAge(age) {
  if (age > 18) {
    return "Adult";
  } else if (age > 13) {
    return "Teenager";
  } else {
    return "Child";
  }
}

console.log(checkAge(25));
console.log(checkAge(15));
console.log(checkAge(10));

var color = "red";

switch (color) {
  case "red":
    console.log("Roses are red");
    break;
  case "blue":
    console.log("Sky is blue");
    break;
  default:
    console.log("I don't know the color");
    break;
}
