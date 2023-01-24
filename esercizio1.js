/* ES 1 */
class Person {
  constructor(fristName, age) {
    this.firstName = fristName;
    this.age = age;
  }

  static oldest(p1, p2, p3) {
    if (p1.age > p2.age && p1.age > p3.age) {
      return (
        p1.firstName +
        " è più vecchio di " +
        p2.firstName +
        " e di " +
        p3.firstName
      );
    } else if (p2.age > p1.age && p2.age > p3.age) {
      return (
        p2.firstName +
        " è più vecchio di " +
        p1.firstName +
        " e di " +
        p3.firstName
      );
    } else {
      return (
        p3.firstName +
        " è più vecchio di " +
        p1.firstName +
        " e di " +
        p2.firstName
      );
    }
  }
}

let p1 = new Person("Qui", 40);
let p2 = new Person("Quo", 50);
let p3 = new Person("Qua", 20);

console.log(Person.oldest(p1, p2, p3));
