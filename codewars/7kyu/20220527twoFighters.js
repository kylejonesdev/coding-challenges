function declareWinner(fighter1, fighter2, firstAttacker) {
    const first = (fighter1.name === firstAttacker) ? fighter1 : fighter2;
    const second = (first === fighter1) ? fighter2 : fighter1;
    let firstSurvivedAttacks = null;
    let secondSurvivedAttacks = null;
    function fightItOut(attacker, defender) {
      let survived = 0;
      while(defender > 0) {
      defender -= attacker;
      survived++
      }
      return survived;
    }
    firstSurvivedAttacks = fightItOut(second.damagePerAttack, first.health);
    secondSurvivedAttacks = fightItOut(first.damagePerAttack, second.health);
    return (firstSurvivedAttacks >= secondSurvivedAttacks) ? first.name : second.name;
}