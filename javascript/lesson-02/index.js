var obj = {
  name: 'Yevhenii',
  surname: 'Chukavov',
  user: function (greeting) {
    return `${greeting}: ${this.name} ${this.surname}
This is my name`;
  },
};

var myFunc = obj.user;

// myFunc('Hghjgjhghjg');
var a = true;
var b =
  typeof a === 'string'
    ? isNaN(+a)
      ? 'Not avalible number'
      : +a
    : typeof a !== 'number'
      ? 'Error'
      : a;

console.log('b:', b);

var one = [5, 6, 148, 52, 55, 45, 14];
one.forEach((item, index) => {
  console.log(item % 3 === 0 ? `index: ${index}, 'кратно 3` : '');
});

var aa = 0;
if (aa || aa === 0) {
  console.log('aa:', aa);
} else {
  console.log('Nothing');
}
