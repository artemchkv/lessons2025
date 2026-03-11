// var num = 11;
// var weather = 'Ужасная погода';

// setTimeout(() => {
//   alert(`Сегодня ${num} марта и сегодня ${weather.toLocaleLowerCase()}`);
// }, 5000);

// console.log('🚀 ~ weather:', weather);

// var discription = 'Это книга про пиратов Карибского пираты моряпи';
// console.log('result:', discription.indexOf('some'));

var url = 'https://google.com';

if (url.indexOf('https://') !== -1) {
  var domain = url.substring(8, url.length);
  console.log('Your domain is: ', domain);
} else {
  console.error('Not avalible url');
}
if (url.indexOf('https://') !== -1) {
  var domain = url.slice(8, -1 + 1);
  console.log('SLICE method Your domain is: ', domain);
} else {
  console.error('Not avalible url');
}

var email = 's@jjkhkhkjhjkh.t';

var str = 'Hello BAD friends bad 911';
var reg = /\d/gi;
console.log('REGEXP resiult:', str.match(reg));

console.log('REGEXP resiult:', /Helllo/gi.test(str));

var newStr = str.replace('Hello', 'Hi');
console.log('🚀 ~ newStr:', newStr);

var name = 'Jhon "Littl" Mac\'Most';
