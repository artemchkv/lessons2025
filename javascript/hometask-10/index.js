class Show {
  showCreate(name) {
    console.log('🚀 ~ Created animal:', name);
  }
  showDelete(name) {
    console.log('🚀 ~ Deleted animal:', name);
  }
}

class WatchAnimals {
  constructor(show) {
    this.show = show;
  }
  watchCreate(name) {
    this.show.showCreate(name);
  }
  watchDelete(name) {
    this.show.showDelete(name);
  }
}
class Animals {
  constructor(watchAnimals) {
    this.watchAnimals = watchAnimals;
    this.animals = [];
  }

  createAnimal(data) {
    this.animals.push(data);
    this.watchAnimals.watchCreate(data.name);
  }

  deleteAnimal(name) {
    this.animals = this.animals.filter((animal) => animal.name !== name);
    this.watchAnimals.watchDelete(name);
  }
}

const show = new Show();
const watchAnimals = new WatchAnimals(show);

const animals = new Animals(watchAnimals);

animals.createAnimal({ name: 'Lion', age: 5, size: 'large' });
animals.createAnimal({ name: 'Tiger', age: 3, size: 'medium' });
console.log(animals.animals);

animals.deleteAnimal('Lion');
console.log(animals.animals);
