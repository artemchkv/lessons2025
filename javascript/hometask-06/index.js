var arr1 = [
  'first',
  2,
  'second',
  'third',
  'third',
  85,
  'secondary',
  100,
  'firster',
  2,
];
var arr2 = ['secondary', 'firster', 85, 'third', 100, 'second', 2];

var finalArray = [];
var memored = [];

// for (var i = 0; i < arr1.length; i++) {
//     var item = arr1[i];
//         if (arr2.includes(item) && !memored.includes(item)) {
//     memored.push(item);

//     if (typeof item === 'number' && item % 5 === 0) {
//         finalArray.push('FIVE');
//         }
//     else if (typeof item === 'string' && item.length > 5) {
//         finalArray.push('FSTR');
//         }
//     else {
//         finalArray.push(item);
//         }
//     }
// }
arr1.forEach((item) => {
  if (arr2.includes(item) && !memored.includes(item)) {
    memored.push(item);

    if (typeof item === 'number' && item % 5 === 0) {
      finalArray.push('FIVE');
    } else if (typeof item === 'string' && item.length > 5) {
      finalArray.push('FSTR');
    } else {
      finalArray.push(item);
    }
  }
});

console.log(finalArray);
