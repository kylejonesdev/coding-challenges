class Being {
    constructor(species, age, health, alive) {
        this._species = species;
        this.age = age;
        this.health = health;
        this.alive = alive;
    }
    get species() {
        return this._species;
    }
    takeDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            this.alive = false;
            console.log(`${this.species} has died.`);
        }
    }
    attack(target, weapon, damage) {
        console.log(`The ${this.species} attacks ${target.species} with a ${weapon}, doing ${damage} damage.`);
        target.takeDamage(damage);
    }
}
class Humanoid extends Being {
    constructor(species, age, health, alive, name, faction) {
        super(species, age, health, alive);
        this._name = name;
        this.faction = faction;
    }
    get name() {
        return this._name;
    }
    attack(target, weapon, damage) {
        console.log(`${this.name} attacks ${target.name || target.species} with a ${weapon}, doing ${damage} damage.`)
        target.takeDamage(damage);
    }
}
class Creature extends Being {
    constructor(species, age, health, alive, habitat, predator) {
        super(species, age, health, alive, habitat, predator);
        this._habitat = habitat;
        this._predator = predator;
    }
    attack(target, weapon, damage) {
        if(this._predator === true) {
            console.log(`The ${this.species} attacks ${target.name || target.species} with its ${weapon}, doing ${damage} damage.`);
            target.takeDamage(damage);
        }else{
            console.log(`The ${this.species} is not aggressive and tries to flee.`);
        }
    }
}
let bob = new Humanoid('human', 28, 10, true, 'Bob', 'good');
let deer1 = new Creature('deer', 2, 5, true, 'forest', false);
let wolf1 = new Creature('wolf', 4, 10, true, 'forest', true);
console.log(bob.species);
console.log(typeof bob);
bob.attack(deer1, 'sword', 4);
deer1.attack(bob, 'horns', 2);
wolf1.attack(bob, 'bite', 5);