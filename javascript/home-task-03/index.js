var isLoginTrue;
var isPassowordTrue;

var regexLogin = /^[A-Z][A-Za-z]*\d{2}$/;
var regexPassword = /[A-Z]{1,5}/;

var login = prompt('Enter your login');

if (regexLogin.test(login)) {
  isLoginTrue = true;
  var password = prompt('Enter your password');
  if (regexPassword.test(password)) {
    isPassowordTrue = true;
  }
}

console.log('Login validation:', !!isLoginTrue);
console.log('Password validation:', Boolean(isPassowordTrue));
