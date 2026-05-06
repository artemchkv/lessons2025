var options = ["камень", "ножницы", "бумага"];
var userChoice = prompt("Выберите: камень, ножницы или бумага");

var randomNumber = Math.floor(Math.random() * 3);
var computerChoice = options[randomNumber];

if (userChoice === null) {
    alert("Отменено пользователем");
} else {
    var playerChoice = userChoice.trim().toLowerCase();
}

if (!options.includes(playerChoice)) {
    alert("Ошибка: введите камень, ножницы или бумага");
}
else {
    alert("Компьютер выбрал: " + computerChoice);
}

if (playerChoice === computerChoice) {
    alert("Ничья!");
} else if ((playerChoice === "камень" && computerChoice === "ножницы") ||
        (playerChoice === "ножницы" && computerChoice === "бумага") ||
        (playerChoice === "бумага" && computerChoice === "камень")) {
    alert("Вы выиграли!");
} else {
    alert("Вы проиграли!");
}