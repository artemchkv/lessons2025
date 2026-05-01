var static = ['static', 'static', 'static'];
var sentences = [];

var promtArray = [
  'Первая фраза: ',
  'Вторая фраза: ',
  'Третья фраза: ',
  'Четвертая фраза: ',
  'Пятая фраза: ',
];

for (var i = 0; i < promtArray.length; i++) {
  var data = prompt(promtArray[i]);
  if (data) {
    sentences.push(data);
  }
}
console.log('array: ', sentences);

var result = sentences.concat(static);

var resultString = result.join('').length;
alert('Длина строки: ' + resultString);
