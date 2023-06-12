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

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  }
  // when the number is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number !'; // .message is the class
    document.querySelector('body').style.backgroundColor = '#60b347'; // here body is the html tag
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  // when the number is greater
  else if (guess > secretNumber) {
    if (score > 1) {
      // to maintain the score from going into negative
      document.querySelector('.message').textContent = '📈 Number is Greater !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // when score goes to 0 , to display message as lost
      document.querySelector('.message').textContent = ' ☠️ You Lost !';
      console.log(document.querySelector('.score').textContent == 0);
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
    // when the number is smaller
  } else if (guess < secretNumber) {
    if (score > 1) {
      // to maintain the score from going into negative
      document.querySelector('.message').textContent =
        ' 📉 Number is Smaller !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // when score goes to 0 , to display message as lost
      document.querySelector('.message').textContent = ' ☠️ You Lost !';
      console.log(document.querySelector('.score').textContent == 0);
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222'; // here body is the html tag
  document.querySelector('.number').style.width = '15rem';
});
