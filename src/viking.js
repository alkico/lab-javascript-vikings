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

    const poorSaxon = this.saxonArmy[saxonIndex];
    const badViking = this.vikingArmy[vikingIndex];

    const damage = poorSaxon.receiveDamage(badViking.attack());

    if (poorSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return damage;
  }

  saxonAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const badSaxon = this.saxonArmy[saxonIndex];
    const poorViking = this.vikingArmy[vikingIndex];

    const damage = poorViking.receiveDamage(badSaxon.attack());

    if (poorViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return damage;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      // a falsey value
      return "Vikings have won the war of the century!";
    }
    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
