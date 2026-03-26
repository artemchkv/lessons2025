// var re1 = new RegExp('abc');

// var string1 = 'ddsfsabcbde';

// const result = re1.test(string1);
// const result2 = string1.match(re1);
// const result3 = string1.search(re1);
// console.log('🚀 ~ result3:', result3);

// console.log(result);
// console.log('🚀 ~ result2:', result2);

// var str = 'Bad Hello BAD friends bad';
// var reg = /bad/gi;
// var str2 = str.replace(reg, 'good');

// console.log('🚀 ~ str2:', str2);

// var str = '+380-99-532-77-99';
// var reg2 = /^\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}\b/gi;

// var result = reg2.test(str);
// console.log('🚀 ~ result:', result);

// If else

var obj = { name: 'Yevhenii' };

if (obj.name === 'Yevhenii') {
  console.log('Name: ', obj.name);
} else if (obj.name) {
  console.log('Name not found, but prezent');
} else {
  console.log('Not enout name');
}

var strr = '"kjjhkhjhlk": {"kjjkh": kljklj, "lkjkljlj": jkjkhkjhkljh}';
var obj11 = { kjjhkhjhlk: { kjjkh: 'kljklj', lkjkljlj: 'jkjkhkjhkljh' } };

var json = JSON.stringify(obj11);
console.log('strr:', json);

var parsedJson = JSON.parse(json);
console.log('parsedJson', parsedJson);
