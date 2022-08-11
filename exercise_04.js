function Unit(type, brand, power) {
  this.type = type;
  this.brand = brand;
  this.power = power;
  this.turnOn = function () {
    console.log(`${this.brand} ${this.type} is turned on.`);
  };
  this.turnOff = function () {
    console.log(`${this.brand} ${this.type} is turned off.`);
  };
}

function Iron(type, brand, power, weight) {
  Unit.call(this, type, brand, power);
  this.weight = weight;
  this.steam = function () {
    console.log("Pshshshsh...");
  };
}

function Hairdryer(type, brand, power, modes) {
  Unit.call(this, type, brand, power);
  this.modes = modes;
  this.changeMode = function () {
    console.log("Wooooooh...");
  };
}

Iron.prototype = Object.create(Unit.prototype);
Iron.prototype.constructor = Iron;

Hairdryer.prototype = Object.create(Unit.prototype);
Hairdryer.prototype.constructor = Hairdryer;

const iron = new Iron("iron", "Braun", "1000W", "1 kg");
const hairdryer = new Hairdryer("hairdryer", "Philips", "1200W", "3");

console.log(iron);
console.log(hairdryer);

iron.turnOff();
hairdryer.turnOn();
iron.steam();
hairdryer.changeMode();
