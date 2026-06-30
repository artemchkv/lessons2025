var users = [];
var container = document.createElement('div');
document.body.appendChild(container);

var FormView = () => {
  container.innerHTML = '';

  var nameInput = document.createElement('input');
  nameInput.className = 'name-input';
  nameInput.placeholder = 'Имя';
  nameInput.type = 'text';
  var surnameInput = document.createElement('input');
  surnameInput.className = 'surname-input';
  surnameInput.placeholder = 'Фамилия';
  surnameInput.type = 'text';
  var ageInput = document.createElement('input');
  ageInput.className = 'age-input';
  ageInput.type = 'number';
  ageInput.max = '3';
  ageInput.placeholder = 'Возраст';

  var addButton = document.createElement('button');
  addButton.className = 'add-button';
  addButton.textContent = 'Add';
  var showButton = document.createElement('button');
  showButton.className = 'show-button';
  showButton.textContent = 'Show users';

  container.append(nameInput, surnameInput, ageInput, addButton, showButton);

  addButton.addEventListener('click', () => {
    if (!nameInput.value || !surnameInput.value || !ageInput.value) {
      alert('Заполните все поля!');
      return;
    }
    class User {
      constructor(name, surname, age) {
        this.id = Date.now();
        this.name = name;
        this.surname = surname;
        this.age = age;
      }
    }
    var newUser = new User(nameInput.value, surnameInput.value, Number(ageInput.value));

    users.push(newUser);
    console.log(users);
    nameInput.value = '';
    surnameInput.value = '';
    ageInput.value = '';
  });
  showButton.addEventListener('click', () => {
    ListView();
  });
};

class UserManager {
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
}

var DeleteUser = (userId) => {
  users = users.filter((user) => user.id !== userId);
  console.log('🚀 ~ DeleteUser ~ users:', users);
  ListView();
};

var ListView = () => {
  container.innerHTML = '';
  var list = document.createElement('ul');
  users.forEach((user) => {
    var liItem = document.createElement('li');
    liItem.textContent = `${user.name} ${user.surname} ${user.age} лет`;
    list.appendChild(liItem);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      DeleteUser(user.id);
    });
    liItem.appendChild(deleteButton);
    container.appendChild(list);
  });
};

FormView();
