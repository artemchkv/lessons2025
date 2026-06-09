class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.animals = [];
    }

    createAnimal(name, age) {
        const newAnimal = {
            name: name,
            age: age
        };
        this.animals.push(newAnimal);
        }
    
    deleteAnimal(name) {
        this.animals = this.animals.filter(animal => animal.name !== name);
    }
}

const animals = new Animals();
animals.createAnimal('Lion', 5);
animals.createAnimal('Tiger', 3);
console.log(animals.animals);

animals.deleteAnimal('Tiger');
console.log(animals.animals);