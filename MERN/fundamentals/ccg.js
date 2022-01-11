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
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, mag) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.mag = mag;
  }
  play(target) {
    if (target instanceof Unit) {
      target[this.stat] += this.mag;
    } else {
      console.log("Must target a unit");
    }
  }
}

// unit cards
redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 3);
blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// effect cards
hardAlgo = new Effect(
  "Hard Algorithm",
  2,
  "increase target's resilience by 3",
  "res",
  3
);
promiseReject = new Effect(
  "Unhandled Promise Rejection",
  1,
  "Reduce target's resilience by 2",
  "res",
  -2
);
pairProg = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);

// turn 1
console.log("Turn 1");
console.log(redBeltNinja);
hardAlgo.play(redBeltNinja);
console.log(redBeltNinja);

// turn 2
console.log("Turn 2");
console.log(blackBeltNinja);
promiseReject.play(redBeltNinja);
console.log(redBeltNinja);

console.log("Turn 3");
pairProg.play(redBeltNinja);
console.log(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);
