'use strict';

//variaveis
let score = 20;
let highScore = 1;
let printHighScore = 20;

//funcção para gerar os números aleatórios
function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//variavel número secreto
let secretNumber = between(4500, 4650);
console.log(secretNumber);

//quando carrregamos no botão "check"
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    // Between 1 and 20
  } else if (guess < 4500 || guess > 4650) {
    document.querySelector('.message').textContent =
      'Anabela eu estou-me a ficar consigo!';

    // Right Number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!!';
    if (highScore < printHighScore) {
      printHighScore = highScore;
    }
    document.querySelector('.highscore').textContent = printHighScore;
    document.querySelector('.score').textContent = score - 1;
    document.querySelector('body').style.backgroundColor = '#00CED1';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Diferent
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber
        ? 'Anabela você é um ponto!'
        : 'Mais que 200 e mais que 300...';
    if (score !== 1) {
      score = score - 1;
      highScore = highScore + 1;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('.message').textContent = 'Já me deu o fanico!';
      document.querySelector('body').style.backgroundColor = '#CD5C5C';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//quando carregamos no botão "Palpitar"
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Quanto pesa o saco?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  secretNumber = between(4500, 4650);
  highScore = 1;
  score = 20;
});
