// var data = new Date(819891000000);
// console.log('🚀 ~ data:', data);

// var data2 = new Date(1995, 11, 25, 13, 30, 0);
// var stringDate = Date.parse(data2);
// console.log('🚀 ~ stringDate:', stringDate);
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

var button = document.querySelector('button');
button.addEventListener('click', () => {
  var data = Date.now();
  var div = document.getElementById('root');
  var stringDate = new Date(data);
  div.innerText = `Data atual: ${stringDate.toLocaleDateString('en-US', options)}`;
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log('Random:', Math.round(Math.random() * 3));
