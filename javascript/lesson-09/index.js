// https://learn.javascript.ru/es-class

class Animal {
  constructor(title, name, speed, paw) {
    this.name = `${title} ${name}`;
    this.speed = speed;
    this.countPaw = paw || 4;
  }
  say() {
    console.log('My name is ', this.name);
    console.log('My speed ', this.speed);
  }
  get pawCount() {
    return this.countPaw;
  }
  get mySpeed() {
    return this.speed;
  }
  set pawCount(value) {
    if (value < 0) {
      console.error('Paw count cannot be negative');
      return;
    }
    this.countPaw = value;
  }
}

// var rabbit = new Animal('Rabbit', 'Bunny', 40);
// rabbit.say();

// console.log('I have: ', rabbit.pawCount, ' paws');
// console.log('My speed is: ', rabbit.mySpeed, ' km/h');

// rabbit.pawCount = 6;
// console.log('Now I have: ', rabbit.pawCount, ' paws');

// var cat = new Animal('Cat', 'Barsic', 5);
// console.log('My speed is: ', cat.mySpeed, ' km/h');
// cat.say();

class Pet extends Animal {
  constructor(title, name, speed, paw, owner) {
    super(title, name, speed, paw);
    this.owner = owner;
  }
  sayOwner() {
    console.log('My owner is ', this.owner);
  }
}
class Wild extends Animal {
  constructor(title, name, speed, paw, area, danger) {
    super(title, name, speed, paw);
    this.area = area;
    this.danger = danger;
  }
  get animalsArea() {
    return this.area;
  }
  set animalsArea(value) {
    this.area = value;
  }
  static getDangerLevel() {
    return 'High';
  }
}

var dog = new Pet('Dog', 'Sharik', 20, 4, 'John');
dog.say();
dog.sayOwner();``

var tiger = new Wild('Tiger', 'Sherkhan', 60, 4, 'Africa', 'High');

tiger.say();
console.log('I live in: ', tiger.animalsArea);
tiger.animalsArea = 'Jungle';
console.log('Now I live in: ', tiger.animalsArea);

console.log('Wild anomals denger lvl is: ', Wild.getDangerLevel());
