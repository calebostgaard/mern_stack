class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
        console.log(`${ this.name } attacked ${ target.name }. ${ target.name }''s resilience is now ${ target.res }.`);

    }

    showStats() {
        console.log(`Name: ${ this.name }, Power: ${ this.power }, Resilience: ${ this.res }`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if(target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log(`You have played ${ this.name } on ${ target.name }.`);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

//Turn 1
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
RedBeltNinja.showStats();
const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
HardAlgorithm.play(RedBeltNinja);
RedBeltNinja.showStats();

//Turn 2
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
BlackBeltNinja.showStats();
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
UnhandledPromiseRejection.play(RedBeltNinja);
RedBeltNinja.showStats();


//Turn 3
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.showStats();
RedBeltNinja.attack(BlackBeltNinja);

RedBeltNinja.showStats();
BlackBeltNinja.showStats();
