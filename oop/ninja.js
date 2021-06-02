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
        console.log(`Name: ${ this.name }`);
        console.log(`Health: ${ this.health }`);
        console.log(`Speed: ${ this.speed }`);
        console.log(`Strength: ${ this.strength }`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`Your ninja drank sake and your health is now ${ this.health }.`);
    }


}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();