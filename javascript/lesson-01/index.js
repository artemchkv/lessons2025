// Тип number 
var a;
// console.log('My variable type is:', typeof a)

a = 4;
// console.log('My variable type is:', typeof a)
// Тип string
var b;
// console.log('My variable type is:', typeof b)
console.log('d', d)
b = 'Value zero';
b = b.toUpperCase();
c = b.toLowerCase();
var d = 'hjjlkhkj';
console.log(b, c, d)
// Тип bool

var e;
var g = '5';

e = g > a
console.log('e type: ', e)

// Тип object

var array = ['d', 43535, 'jdjdj'];
console.log(array, typeof array)

console.log('first element', array[1]);

var obj = {'first name': 'Yevhenii'};
console.log('first element', obj['first name']);

var obj1 = {secondName: 'Chukavov', 'firstName': 'Yevhenii', 0: {isObj: true, name: 'inner obj'}, 'login': 'Yevhenii',};
console.log('first element', obj1.firstName);
console.log(typeof obj1);

var newOnj = {...obj1};
obj1.secondName = 'JKHjkhjkhjklh'
console.log('elements newOnj', newOnj);

function user(name) {
  var newName = name + ' ' + 'Chukavov';
  return newName;
}

var pro = confirm('User:', user('Yevhenii'));
console.log("🚀 ~ pro:", pro)
