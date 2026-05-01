var sentences = [
  prompt("Первая фраза: "),
  prompt("Вторая фраза: "),
  prompt("Третья фраза: ")
];
var static = ["static", "static", "static"];

var result = sentences.concat(static);

var resultString = result.join('').length;
alert("Длина строки: " + resultString);