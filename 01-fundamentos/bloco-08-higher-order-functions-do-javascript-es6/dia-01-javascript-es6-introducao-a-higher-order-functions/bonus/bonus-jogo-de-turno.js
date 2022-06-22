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

const dragonDamage = () => {
  const min = 15;
  const max = dragon.strength;
  return min + Math.round((Math.random() * (max - min)));
} 

const warriorDamage = () => {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return min + Math.round((Math.random() * (max - min)));
}



for (let i = 0; i < 100; i += 1) {
  console.log(warriorDamage());
}