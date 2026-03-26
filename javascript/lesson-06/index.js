// var month = 13;

function manthly(arg) {
  var monthNo;
  switch (arg) {
    case 1:
      monthNo = 'January';

      break;
    case 2:
      monthNo = 'Febuary';

      break;
    case 3:
      monthNo = 'Match';

      break;

    default:
      monthNo = 'Nothing';
      break;
  }
  return monthNo;
}

// console.log('Month ', manthly(month), ' tooday');

var month = ['January', 'Febuary', 'Match'];

// function loop(index) {
//   return index < month.length;
// }

var loop = (index) => {
  return index < month.length;
};

for (var index = 0; loop(index); index++) {
  console.log('🚀 ~ element:', month[index]);
}
