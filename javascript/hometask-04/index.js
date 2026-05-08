var options = ['камень', 'ножницы', 'бумага', 'колодец'];
var userChoice = prompt('Выберите: камень, ножницы, колодец или бумага');
let playerChoice;

var randomNumber = Math.floor(Math.random() * 4);
var computerChoice = options[randomNumber];

if (userChoice === null) {
  alert('Отменено пользователем');
} else {
  playerChoice = userChoice.trim().toLowerCase();
}

if (!options.includes(playerChoice)) {
  alert('Ошибка: введите камень, ножницы или бумага');
} else {
  alert('Компьютер выбрал: ' + computerChoice);
  if (playerChoice === computerChoice) {
    alert('Ничья!');
  } else {
    switch (playerChoice) {
      case 'камень':
        computerChoice === 'ножницы'
          ? alert('Вы выиграли!')
          : alert('Вы проиграли!');
        break;
      case 'ножницы':
        computerChoice === 'бумага'
          ? alert('Вы выиграли!')
          : alert('Вы проиграли!');
        break;
      case 'бумага':
        computerChoice === 'камень' || computerChoice === 'колодец'
          ? alert('Вы выиграли!')
          : alert('Вы проиграли!');
        break;
      case 'колодец':
        computerChoice === 'камень' || computerChoice === 'ножницы'
          ? alert('Вы выиграли!')
          : alert('Вы проиграли!');
        break;

      default:
        break;
    }
  }
}
