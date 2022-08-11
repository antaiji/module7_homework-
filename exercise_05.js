class Unit {
  constructor(type, brand, power) {
    this.type = type;
    this.brand = brand;
    this.power = power;
  }

  turnOn() {
    console.log(`${this.brand} ${this.type} is turned on.`);
  }

  turnOff() {
    console.log(`${this.brand} ${this.type} is turned off.`);
  }
}

class Iron extends Unit {
  constructor(type, brand, power, weight) {
    super(type, brand, power);
    this.weight = weight;
  }

  steam() {
    console.log("Pshshshsh...");
  }
}

class Hairdryer extends Unit {
  constructor(type, brand, power, modes) {
    super(type, brand, power);
    this.modes = modes;
  }

  changeMode() {
    console.log("Wooooooh...");
  }
}

const iron = new Iron("iron", "Braun", "1000W", "1 kg");
const hairdryer = new Hairdryer("hairdryer", "Philips", "1200W", "3");

console.log(iron);
console.log(hairdryer);

iron.turnOff();
hairdryer.turnOn();
iron.steam();
hairdryer.changeMode();
