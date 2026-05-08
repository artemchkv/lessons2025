var types = [1, 'string', true, null, undefined];

// types.forEach(function(item) {
//     if (item === null) {
//         console.log('Type of ' + item + ' is: null');
//     } else {
//         console.log('Type of ' + item + ' is: ' + typeof item);
//     }
// });

types.forEach((item, index) => {
  if (item === null) {
    console.log(`Index: ${index}, Type of item ${item} is: null`);
  } else {
    console.log(`Index: ${index}, Type of item ${item} is: ${typeof item}`);
  }
});
