class User {
    constructor(name, surname, age) {
    this.id = Date.now();
    this.name = name;
    this.surname = surname;
    this.age = age;
    }
}

class UserModel {
    constructor() {
    this.users = [];
    } 

    addUser(name, surname, age) {
    var newUser = new User(name, surname, age);
    this.users.push(newUser);
    }

    deleteUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);
    }

    getUsers(){
        return this.users
    }
}