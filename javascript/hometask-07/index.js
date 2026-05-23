var obj1 = {first: 'name', second: 'surname', age: 'eighteen', gender: 'female'};
var obj2 = {firstName: 'Artem', second: 'surname', gender: 'male', age: 'eighteen'};

// var compare = (obj1, obj2) => {
//     var result = {};
//     var keys = Object.keys(obj1);

//     keys.forEach(function(key) {
//     if (obj1[key] === obj2[key]) {
//         var value = obj1[key];
//         result[value] = key; 
//     }
//     }
//     );
//     return result;
// }
// console.log(compare(obj1, obj2));   

var compare = (obj1, obj2) => {
    var pairs = Object.entries(obj1);
    var resultPairs = pairs.filter(([key, value]) => obj2[key] === value)
    .map(([key, value]) => [value, key]);
    return Object.fromEntries(resultPairs);
}
console.log(compare(obj1, obj2));
