var obj1 = {
  first: 'name',
  second: 'surname',
  age: 'eighteen',
  gender: 'female',
};
var obj2 = {
  firstName: 'Artem',
  second: 'surname',
  gender: 'male',
  age: 'eighteen',
};

var compare = (obj1, obj2) => {
  var result = {};
  var keys = Object.keys(obj1);

  keys.forEach((key) => {
    if (obj1[key] === obj2?.[key]) {
      result[obj1[key]] = key;
    }
  });
  return result;
};
console.log(compare(obj1, obj2));

// var compare = (obj1, obj2) => {
//   var pairs = Object.entries(obj1);
//   console.log('🚀 ~ compare ~ pairs:', pairs);
//   var resultPairs = pairs
//     .filter(([key, value]) => obj2?.[key] === value)
//     .map(([key, value]) => {
//         return [value, key];
//     });
//   return Object.fromEntries(resultPairs);
// };

var compare = (obj1, obj2) => {
  var pairs = Object.entries(obj1);
  var resultPairs = pairs.filter(([key, value]) => obj2?.[key] === value);
  var resObj = {};
  resultPairs.forEach(([key, value]) => {
    resObj[value] = key;
  });
  return resObj;
};
console.log(compare(obj1, obj2));
