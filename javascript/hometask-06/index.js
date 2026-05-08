// var text = 'I have 1 apple, 2 oranges and 3 bananas and 1 pear.';

// var result = text
//   .replace(/1/g, 'one')
//   .replaceAll('2', 'two')
//   .replaceAll('3', 'three');

// console.log(result);

// var string = 'hello MY name is, JavaScript and I like your: code styLe';

// var clearString = string.replaceAll(/[:.,]/g, '');
// console.log('🚀 ~ clearString:', clearString);
// var words = clearString.split(' ');
// console.log('🚀 ~ words:', words);

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
// }

// words.forEach((word, index) => {
//   console.log('🚀 ~ word:', word);

// });

// var result = words
//   .map((el) => {
//     var isChanged = /[A-Z]/.test(el);
//     if (isChanged) {
//       var str = el
//         .split('')
//         .map((letter) =>
//           /[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase(),
//         )
//         .join('');
//       return str;
//     } else {
//       return el;
//     }
//   })
//   .join(' ');
// console.log('🚀 ~ result:', result);

function fun(name, ...rest) {
  console.log('🚀 ~ fun ~ rest:', rest);
  return name + rest.reduce((acc, el) => acc + el, 0);
}

const result = fun('Artem', 1, 2, 3, 4, 5, 10);
console.log('🚀 ~ result:', result);
