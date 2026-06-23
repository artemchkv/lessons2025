var users = [];
var container = document.createElement('div');
document.body.appendChild(container);

var FormView = () => {
    container.innerHTML = '';

    var nameInput = document.createElement('input');
    nameInput.placeholder = 'Имя';
    nameInput.type = 'text';
    var surnameInput = document.createElement('input');
    surnameInput.placeholder = 'Фамилия';
    surnameInput.type = 'text';
    var ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.placeholder = 'Возраст';

    var addButton = document.createElement('button');
    addButton.textContent = 'Add';
    var showButton = document.createElement('button');
    showButton.textContent = 'Show users';

    container.append(nameInput, surnameInput, ageInput, addButton, showButton);

    addButton.addEventListener('click', () => {
        if (!nameInput.value || !surnameInput.value || !ageInput.value) {
            alert('Заполните все поля!');
            return;
        }
        var newUser = {
            id: Date.now(),
            name: nameInput.value,
            surname: surnameInput.value,
            age: Number(ageInput.value)
        };
        
        users.push(newUser);
        console.log(users);
        nameInput.value = '';
        surnameInput.value = '';
        ageInput.value = '';
    });
    showButton.addEventListener('click', () => {
        ListView();
    });
}

var ListView = () => {
    container.innerHTML = '';

    var list = document.createElement('ul');
    users.forEach((user) => {
        var liItem = document.createElement('li');
        liItem.textContent = `${user.name} ${user.surname} ${user.age} лет`;
        list.appendChild(liItem);
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.addEventListener('click', () => {
            users = users.filter((user) => user.id !== user.id);
            ListView();
        });
        liItem.appendChild(deleteButton);
        container.appendChild(list);
    });
}

FormView();