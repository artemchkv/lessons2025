// var myArray = [];
// var second = myArray;

// second[0] = '124';
// myArray[1] = 'hjghjghhj';

// console.log('vs array: ', myArray === second);

// console.log('second: ', second);
// console.log('myArray: ', myArray);

// var arr = new Array(10);
// console.log('🚀 ~ arr:', arr[3]);
// console.log('🚀 ~ arr:', arr.length);

// var arr2 = [undefined, undefined, undefined, undefined, undefined];
// console.log('🚀 ~ arr2:', arr2);
// console.log('🚀 ~ arr2:', arr2.length);

// var arr3 = new Array('hi', 123);
// console.log('🚀 ~ arr3:', arr3);
// var arr4 = ['hi', 123];
// console.log('🚀 ~ arr4:', arr4);

// var arr4 = ['hi', [123, 541, 5564, 4556], { name: 'Yevhenii', age: 53 }];
// console.log('🚀 ~ arr4:', arr4);
// var age_key = 'age';
// console.log('🚀 ~ arr4:', arr4[2][age_key]);
// console.log('🚀 ~ arr4:', arr4[2].age_key);

// var array4 = ['one', 'two'];
// array4.push('three');
// console.log('🚀 ~ array4:', array4);
// array4.unshift('prefix');
// console.log('🚀 ~ array4:', array4);
// array4.pop();
// console.log('🚀 ~ array4:', array4);
// array4.shift();
// console.log('🚀 ~ array4:', array4);

// var str = 'шалаш';

// var strArray = str.split('');
// console.log('🚀 ~ strArray:', typeof strArray);

// var newArray = strArray.reduceRight((acc, item) => acc + item, '');
// strArray.push('-2008');
// var strNew = strArray.join('');
// console.log('🚀 ~ strNew:', strNew);
// var result = str === newArray;
// console.log('🚀 ~ result:', result);

var array6 = [
  'ant',
  'bison',
  'camel',
  'duck',
  true,
  'elephant',
  { name: 'Artem', surname: 'Cukavov', apartment: 22 },
  { name: 'Yevhenii', surname: 'Cukavov', apartment: 21 },
  { name: 'Anna', surname: 'Cukavoff', apartment: 24 },
  { name: 'Nika', surname: 'Cukavoff', apartment: 21 },
];
var array7 = [
  { name: 'Artem', surname: 'Cukavov', apartment: 22 },
  { name: 'Yevhenii', surname: 'Cukavov', apartment: 21 },
  { name: 'Anna', surname: 'Cukavoff', apartment: 24 },
  { name: 'Nika', surname: 'Cukavoff', apartment: 21 },
];
// var result = array6.indexOf(true);
// console.log('🚀 ~ result:', result);

// console.log('Find item:', array6[result]);

// function finder(name) {
//   return name
// }
// finder('Yevhenii')
// var finder = (name) => {
//   return name;
// }

array6.push({
  name: 'Barsik',
  surname: 'Cat',
  apartment: 21,
  createdAt: Date.now(),
});

var result = array6.find(
  // (i) => i?.surname === 'Cukavoff' && i?.apartment === 21
  (i) => i?.surname === 'Cukavoff' || i?.apartment === 21,
);
console.log('🚀 ~ result:', result);

var result2 = array6.filter((element) => element?.apartment !== 24);
console.log('🚀 ~ result2:', result2);

var result3 = array7.map((el) => {
  return el.name;
});
console.log('🚀 ~ result3:', result3);
