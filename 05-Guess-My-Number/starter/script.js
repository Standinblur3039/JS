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

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  }
  // when the number is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number !';
  }
  // when the number is greater
  else if (guess > secretNumber) {
    if (Score > 1) {
      // to maintain the score from going into negative
      document.querySelector('.message').textContent = '📈 Number is Greater !';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      // when score goes to 0 , to display message as lost
      document.querySelector('.message').textContent = ' ☠️ You Lost !';
      console.log((document.querySelector('.score').textContent = 0));
    }
    // when the number is smaller
  } else if (guess < secretNumber) {
    if (Score > 1) {
      // to maintain the score from going into negative
      document.querySelector('.message').textContent =
        ' 📉 Number is Smaller !';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      // when score goes to 0 , to display message as lost
      document.querySelector('.message').textContent = ' ☠️ You Lost !';
      console.log((document.querySelector('.score').textContent = 0));
    }
  }
});
