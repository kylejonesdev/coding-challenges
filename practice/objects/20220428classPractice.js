//Dog Exercise
class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        let sound = 'Woof! Woof!';
        if (this.size > 60) sound = 'Grrr! Grrr!';
        return sound;
    }
}
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//RPG Exercise
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10;
      this.keys = 1;
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this
              .name} eliminated ${target.name} and wins ${bonusXP} experience points`
          );
          this.xp += bonusXP;
          this.gold += target.gold;
          this.keys += target.keys;
          target.gold = 0;
          target.keys = 0;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.gold} gold, and ${this.keys} key(s)`;
    }
  }
  const aurora = new Character("Aurora", 150, 25);
  const glacius = new Character("Glacius", 130, 30);  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora.describe());
  console.log(glacius.describe());  
  const monster = new Character("Spike", 40, 20);
  console.log("A wild monster has appeared: it's named " + monster.name);  
  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);  
  console.log(aurora.describe());
  console.log(glacius.describe());

//Bank Account Exercise
class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    credit(amount) {
        this.balance += amount;
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}
let account1 = new BankAccount('Brad', 1000);
let account2 = new BankAccount('Sean', 1000);
let account3 = new BankAccount('Georges', 1000);
console.log(account1.describe());
console.log(account3.describe());
console.log(account2.describe());