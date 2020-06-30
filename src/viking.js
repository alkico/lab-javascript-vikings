class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
    //return is optional in methods (i.e. functions within classes)
    //BUT wherever there may be later alterations to the value, you have to use return
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    } else {
      return `${this.name} has received ${theDamage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

class Saxon extends Soldier {
  //no constructor method needed because Saxon inherits 'perfectly' from parent class

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${theDamage} points of damage`;
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const badViking = this.vikingArmy[vikingIndex];
    const poorSaxon = this.saxonArmy[saxonIndex];
    const theDamage = poorSaxon.receiveDamage(badViking.attack());
    if (poorSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
  }
  saxonAttack() {
    //same as above
  }

  showStatus() {
    //     if (!this.saxonArmy.length === 0) {   //To create a falsey value ie if NOT a falsey value then...
    //         return 'vikings...won war'
    //     } else if (!this.vikingArmy.length === 0) {
    //         return 'saxons have fourght...'
    //     } else return 'vikings and saxons are still in the thick of battle.'
    //  }
  }

  attackmode(attacker, victim) {
    //   const attackerIndex = Math.floor(Math.random() * this.attackerArmy???.length);
    //   const victimIndex = //same as above
    //   const attacker = this.Army[attackerIndex]
    //   const victim = this.saxonArmy[victimIndex];
    //   const theDamage = poorViking.receiveDamage(badSaxon.attack());
    //   if(poorsaxon.health <= 0){
    //     this.saxonArmy.splice(saxonIndex,1);
    // }
  }

  //     constructor(attackerIndex, victimIndex) {
  // class attackMode {
  //         this.attackerIndex =  Math.floor(Math.random() * this.saxonArmy.length);
  //         this.victimIndex = Math.floor(Math.random() * this.saxonArmy.length);
  //     }

  //     if ()
}
