class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`This ninja is named ${ this.name }`);
    }

    showStats() {
        console.log(`Name: ${ this.name }, Health: ${ this.health }, Speed: ${ this.speed }, Strength: ${ this.strength }`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`Your person drank sake and their health is now ${ this.health }.`);
    }

}

class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
    }
}



// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"