'use strict';
/*
 TODO
console.log(document.querySelector('.message').textContent);  // print message 

document.querySelector('.message').textContent = 'Correct Number !';   //  print Correct Number in console 

document.querySelector('.number').textContent = 13; // show number as 13 
document.querySelector('.score').textContent = 20;  // show as 20 
console.log((document.querySelector('.guess').value = 12));

windows + . = emoji
*/
let highscore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 21);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number !');
  }
  // when the number is correct
  else if (guess === secretNumber) {
    displayMessage('✅ Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347'; // here body is the html tag
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    //when score is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Number is Greater !'
          : ' 📉 Number is Smaller !'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // when score goes to 0 , to display message as lost
    displayMessage(' ☠️ You Lost !');
    console.log(document.querySelector('.score').textContent == 0);
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);

  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222'; // here body is the html tag
  document.querySelector('.number').style.width = '15rem';
});
