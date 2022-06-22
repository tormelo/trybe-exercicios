const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const min = 15;
  const max = dragon.strength;
  return min + Math.round((Math.random() * (max - min)));
}

const warriorDamage = (warrior) => {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return min + Math.round((Math.random() * (max - min)));
}

const mageDamage = (mage) => {
  const min = mage.intelligence;
  const max = mage.intelligence * 2;
  let damage = min + Math.round((Math.random() * (max - min)));
  let cost = 15;

  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    cost = 0;
  }

  return {
    damage: damage,
    cost: cost,
  }
}

const gameActions = {
  warriorTurn: (damageCalc) => {
    const warriorDamage = damageCalc(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (damageCalc) => {
    const mageAction = damageCalc(mage);
    dragon.healthPoints -= mageAction.damage;
    mage.damage = mageAction.damage;
    mage.mana -= mageAction.cost;
  },
  dragonTurn: (damageCalc) => {
    const dragonDamage = damageCalc(dragon);
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());