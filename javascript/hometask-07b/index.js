var str = prompt("Введите данные:");
var arr = str.split(" ");
var obj = {};

for (var i = 0; i < arr.length; i+=2) {
    var key = arr[i];
    var value = arr[i + 1];

    obj[key] = value;
}

console.log(obj);