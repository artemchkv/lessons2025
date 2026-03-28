// var addKeys = ['name', 'surname', 'his age', 'height'];
// var addValues = ['Artem', 'Chukavov', 18, 187];
// var obj = new Object();

// addKeys.forEach((el, index) => {
//   obj[el] = addValues[index];
// });
// console.log('New object:', obj);
// console.log('Age object:', obj['his age']);

// // delete obj.height;
// // console.log('Deleted object:', obj);

// for (var el in obj) {
//   console.log('El:', el);
//   console.log('El:', obj[el]);
// }

// var arrayKey = Object.keys(obj);
// console.log('🚀 ~ arrayKey:', arrayKey);

// var arrayValues = Object.values(obj);
// console.log('🚀 ~ arrayValues:', arrayValues);

function Human(name, age, job) {
  //Свойства шаблона
  this.name = name;
  this.age = age;
  this.job = job;
  //Методы шаблона
  this.who = function who() {
    console.log('Я ' + this.name + ' мне ' + this.age + ' лет.');
    console.log(' Я работаю <.>' + this.job + 'ом.');
  };
}

human1 = new Human('Дмитрий', 26, 'Дизайнер');
console.log('🚀 ~ human1:', human1);
human1.who();
human2 = new Human('Станислав', 29, 'Программист');
human2.who();
human3 = new Human('Сергей', 35, 'Менеджер');
human3.who();
