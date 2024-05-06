// oop basic class str

class Animal {
  constructor(
    public name: string,
    public species: string,
    private sound: string
  ) {}

  makeSound() {
    console.log(`this ${this.name} says ${this.sound}`);
  }
  consolePrivate() {
    console.log(this.sound);
  }
}

// create instance
const dog = new Animal("German Shaperd", "dog", "Ghew Ghew");
const cat = new Animal("Parsian", "Cat", "Miyaow Miyaow");

// dog instance
dog.makeSound();
console.log(dog.name);
dog.consolePrivate();

// cat instance
cat.makeSound();
cat.consolePrivate();
