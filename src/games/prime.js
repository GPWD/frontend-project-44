import getRandomNumberInclusive from '../helper.js';
import playGame from '../index.js';

const primeNumber = () => {
  const randomNumber = getRandomNumberInclusive(0, 100);
  let correctAnswer;

  if (randomNumber <= 2) {
    correctAnswer = 'no';
  }

  for (let num = 2; num < randomNumber; num += 1) {
    if (randomNumber % num === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }

  return [randomNumber, correctAnswer];
};

const startPrimeGame = () => playGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeNumber);

export default startPrimeGame;
