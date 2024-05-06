// oop basic class str
var Animal = /** @class */ (function () {
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("this ".concat(this.name, " says ").concat(this.sound));
    };
    Animal.prototype.consolePrivate = function () {
        console.log(this.sound);
    };
    return Animal;
}());
// create instance
var dog = new Animal("German Shaperd", "dog", "Ghew Ghew");
var cat = new Animal("Parsian", "Cat", "Miyaow Miyaow");
// dog instance
dog.makeSound();
console.log(dog.name);
dog.consolePrivate();
// cat instance
cat.makeSound();
cat.consolePrivate();
