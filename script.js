'use strict';

// console.log(document.querySelector('.message').textContent);
// // manipulating the text conent inside the message class element
// document.querySelector('.message').textContent = 'Correct number!! 🎉';

// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 10;

// console.log(document.querySelector('.score').textContent);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 19;
// console.log(document.querySelector('.guess').value);

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let highscoreEl = Number(document.querySelector('.highscore').textContent);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessEl = Number(document.querySelector('.guess').value);

  if (!guessEl) {
    displayMessage('no number!🙄');
  } else if (guessEl !== randomNumber) {
    if (score > 1) {
      displayMessage(guessEl > randomNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!! 😭');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = '#ff0';
    }
  } else if (guessEl === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscoreEl) highscoreEl = score;
    document.querySelector('.highscore').textContent = highscoreEl;
    // document.querySelector('.message').textContent =
    // 'Congratulation!!! You guessed it right';
    displayMessage('Congratulation!!! You guessed it right');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  // hee queryselector will give a string value as it is an user input hence we need to convert it to number
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});

// document.querySelector('body').style.backgroundColor = '#ff0';
// }
// else if (guessEl > randomNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!! 😭';
//     document.querySelector('.score').textContent = 0;
//     document.body.style.backgroundColor = '#ff0';
//     // document.querySelector('body').style.backgroundColor = '#ff0';
//   }
// } else if (guessEl < randomNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!! 😭';
//     document.querySelector('.score').textContent = 0;
//     document.body.style.backgroundColor = '#ff0';
//     // document.querySelector('body').style.backgroundColor = '#ff0';
//   }
// }
