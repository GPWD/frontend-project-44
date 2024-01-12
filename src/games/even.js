import getRandomNumberInclusive from '../helper.js';
import playGame from '../index.js';

const getOddOrEvenNumber = () => {
  const randomNumber = getRandomNumberInclusive(0, 100);
  let correctAnswer;

  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }
  return [randomNumber, correctAnswer];
};

const startEvenGame = () => playGame('Answer "yes" if the number is even, otherwise answer "no"', getOddOrEvenNumber);

export default startEvenGame;
