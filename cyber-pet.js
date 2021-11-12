class Animal {
  constructor(name, age) {
    (this.name = name),
      (this.age = age),
      (this.hunger = 50),
      (this.thirst = 50),
      (this.sleep = 50),
      (this.happy = 50);
  }

  get status() {
    console.log(
      `Happiness: ${this.happy}; Hunger: ${this.hunger}; Thirst: ${this.thirst}; Tiredness: ${this.sleep}`
    );
  }

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
    this.hunger -= 20;
    this.thirst -= 20;
    this.happy += 15;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.bark = 0;
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
    this.meow = 0;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age);
    this.scrunchNose = 0; 
  }
}

let spot = new Dog("Spot", 3);

const inquirer = require("inquirer");
const { petQ } = require("./petQ");

const Animal = () => {
  inquirer.prompt(petQ).then((answers) => {
    Animal = new Animal(answers.petTypeList, answers.petName)
    if (answers.petTypeList === "Dog"){
      console.log ("A Dog")
    }
    if (answers.petName === "Spot"){
      console.log ("Hello Spot!")
    }
  })
}



 let possibleOptions = ["hunger", "thirst", "sleep", "happy"];

const gameLoop = () => {
   if (possibleOptions == "hunger") {
     Animal.hunger += 5;
   } else if (possibleOptions == "thirst") {
     Animal.thirst += 5;
   } else if (possibleOptions == "sleep") {
     Animal.sleep += 5;
   } else if (possibleOptions == "happy") {
     Animal.happy -= 5;
   }
   gameLoop();
 };

 const startGame = () => {
   gameLoop();
 };

// startGame();

