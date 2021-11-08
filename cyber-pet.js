class Animal {
  constructor(name, age) {
    this.name = name,
      this.age = age,
      this.hunger = 50,
      this.thirst = 50,
      this.sleep = 50,
      this.happy = 50
  }

  get status() {
    console.log(`Happiness: ${this.happy}; Hunger: ${this.hunger}; Thirst: ${this.thirst}; Tiredness: ${this.sleep}`);
  }

  // get age() {
  //   return `Your pet is ${this.age} years old.`
  // }

  play() {
    if (this.happy < 100) {
      this.happy += 10;
    }
    this.thirst += 10;
    this.sleep += 10;
    this.hunger += 10;
  }

  giveFood() {
    if (this.hunger > 0) {
      this.hunger -= 20;
    }
    this.thirst += 10;
    this.sleep += 10;
    this.happy += 15;
  }

  giveDrink() {
    if (this.thirst > 0) {
      this.thirst -= 20;
    }
    this.sleep += 10;
    this.happy += 15;
  }

  goToBed() {
    if (this.sleep > 0) {
      this.sleep -= 50;
    }
    this.hungry -= 20;
    this.thirst -= 20;
    this.happy += 15;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age);
  }
}

let spot = new Dog("Spot", 3);
// console.log(spot);
console.log(spot.status);
spot.play();
console.log(spot.status);