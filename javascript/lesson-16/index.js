// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     var root = document.getElementById('root');
//     var jsonResp = JSON.parse(xhttp.responseText);
//     jsonResp.forEach((el) => {
//       var div = document.createElement('div');
//       div.innerText = el.name;
//       root.appendChild(div);
//     });
//   }
// };

// xhttp.open(
//   'GET',
//   'https://6a08b0d9e7e3f433d482c478.mockapi.io/api/v1/author',
//   true,
// );

// var button = document.querySelector('.fetch-list');
// button.addEventListener('click', function () {
//   xhttp.send();
// });
const baseUrl = 'https://6a08b0d9e7e3f433d482c478.mockapi.io/api/';
const getListUrl = 'v1/author';
const addAuthorUrl = 'v1/author';
const deleteAuthorUrl = 'v1/author';

async function deleteAuthor(id) {
  console.log('🚀 ~ deleteAuthor ~ id:', id);
  try {
    const response = await fetch(`${baseUrl}${deleteAuthorUrl}/${id}`, {
      method: 'DELETE',
    });
    console.log('🚀 ~ deleteAuthor ~ response:', response);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const rowForDelete = document.querySelector(`.table-row[data-id="${id}"]`);
    if (rowForDelete) {
      rowForDelete.remove();
    }
  } catch (error) {
    console.error('Error fetching deleteAuthor:', error);
  }
}

const listCreator = (data) => {
  data.forEach((element) => {
    var div = document.createElement('div');
    div.className = 'table-row';
    div.dataset.id = element.id;
    const array = Object.entries(element);
    for (const [key, value] of array) {
      if (key === 'avatar') {
        const divItem = document.createElement('img');
        divItem.src = value;
        divItem.className = 'table-row-item avatar';
        div.appendChild(divItem);
      } else {
        const divItem = document.createElement('div');
        divItem.className = 'table-row-item';
        divItem.innerText =
          key === 'createdAt' ? new Date(value).toLocaleDateString() : value;
        div.appendChild(divItem);
      }
    }
    const actionCell = document.createElement('div');
    actionCell.className = 'table-row-item actions';
    actionCell.innerHTML = `<button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>`;

    actionCell.querySelector('.delete-btn').addEventListener('click', () => {
      deleteAuthor(element.id);
    });

    actionCell.querySelector('.edit-btn').addEventListener('click', () => {
      console.log('Edit author', element.id);
      // TODO: открыть форму редактирования
    });

    div.appendChild(actionCell);
    document.getElementById('root').appendChild(div);
  });
};

// const fetchList = () => {
//   fetch(`${baseUrl}${getListUrl}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('🚀 ~ fetchList ~ data:', data);
//       listCreator(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching list:', error);
//     });
// };

const fetchList = async () => {
  try {
    const response = await fetch(`${baseUrl}${getListUrl}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();

    listCreator(data);
  } catch (error) {
    console.error('Error fetching list:', error);
  }
};

const addAuthor = async (name, avatar) => {
  const author = { name: name.trim(), avatar: avatar.trim(), books: [] };
  console.log('Add author');
  console.log('🚀 ~ addAuthor ~ name, avatar:', name, avatar);
  try {
    const response = await fetch(`${baseUrl}${addAuthorUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    console.log('🚀 ~ addAuthor ~ data:', data);
    listCreator([data]);
  } catch (error) {
    console.error('Error adding author:', error);
  }
};

var button = document.querySelector('.fetch-list');
button.addEventListener('click', function () {
  fetchList();
});

var addAuthorForm = document.getElementById('add-author-form');
addAuthorForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = addAuthorForm.querySelector('[name="name"]').value;
  const avatar = addAuthorForm.querySelector('[name="avatar"]').value;
  addAuthor(name, avatar);
});
// CRUD - Create, Read, Update, Delete
