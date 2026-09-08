class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    display() {
        console.log("Dog Name: " + this.name);
        console.log("Breed: " + this.breed);
    }

    bark() {
        console.log(this.name + " says: Woof! Woof!");
    }
}

let dog1 = new Dog("Tommy", "Labrador");

dog1.display();
dog1.speak();
dog1.bark();
