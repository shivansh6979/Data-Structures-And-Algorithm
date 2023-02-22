class Player {
  constructor(name, age) {
    (this.name = name), (this.age = age);
    console.log("player", this);
  }
  introduce() {
    console.log(`Hi i am ${this.name}`);
  }
}

const obj = new Player("shivansh", 10);

class Wizard extends Player {
  constructor(name, age) {
    super(name, age);
    console.log("Wizard", this);
  }
  play() {
    console.log(`Player identified as : ${this.name} and age is ${this.age}`);
  }
}

const student = new Wizard("Priya ", "30");
