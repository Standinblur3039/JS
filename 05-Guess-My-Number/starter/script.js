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

let Score = 20;
const secretNumber = Math.trunc(Math.random() * 21);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number !';
  } else if (guess > secretNumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = '📈 Number is Greater !';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = ' ☠️ You Lost !';
      console.log((document.querySelector('.score').textContent = 0));
    }
  } else if (guess < secretNumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent =
        ' 📉 Number is Smaller !';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = ' ☠️ You Lost !';
      console.log((document.querySelector('.score').textContent = 0));
    }
  }
});
