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

var button = document.querySelector('.fetch-list');
button.addEventListener('click', function () {
  fetchList();
});
