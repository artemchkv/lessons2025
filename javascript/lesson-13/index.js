var userName;
console.log('🚀 ~ userName:', userName);
userName = localStorage.getItem('user');
console.log('🚀 ~ userName:', userName);

if (!userName) {
  userName = prompt('Please enter your name:').trim();
  userName && localStorage.setItem('user', userName);
}
if (userName) {
  var greeting = document.createElement('p');
  greeting.textContent = 'Hello, ' + userName + '!';
  document.body.appendChild(greeting);
}
// bool false == > false, 0, '', null, undefined, NaN

// console.log(Boolean(NaN));
// console.log(10);
// console.log(10 + '10');

// var a = '20';
// var b = '10a';
// var c;
// if (!isNaN(Number(a))) {
//   if (!isNaN(+b)) {
//     c = +a + +b;
//   }
// }

// console.log('🚀 ~ c:', c ? c : 'No valid result');
