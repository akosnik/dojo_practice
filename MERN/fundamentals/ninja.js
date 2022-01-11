class Ninja {
  constructor(name, health = 50, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(`HP: ${this.health}, SP: ${this.speed}, ST: ${this.strength}`);
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name, health = 50, speed = 3, strength = 3, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    this.drinkSake();
    console.log("Time flies like an arrow, but fruit flies like a banana.");
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Panda");
sensei1.speakWisdom();
