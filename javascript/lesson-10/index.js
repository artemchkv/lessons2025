function math(a, b, action) {
  if (action === 'sum') {
    return a + b;
  } else if (action === 'sub') {
    return a - b;
  } else if (action === 'mult') {
    return a * b;
  } else if (action === 'div' && b !== 0) {
    return a / b;
  } else {
    return 'Unknown action or division by zero';
  }
}

var number = math(10, 5, 'sub');
console.log(number); // Output: 15
