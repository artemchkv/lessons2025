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

const listCreator = (data) => {
  data.forEach((element) => {
    var div = document.createElement('div');
    div.className = 'table-row';
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
