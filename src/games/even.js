import getRandomNumberInclusive from '../helper.js';
import playGame from '../index.js';

const getOddOrEvenNumber = () => {
  const randomNumber = getRandomNumberInclusive(0, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const startEvenGame = () => playGame('Answer "yes" if the number is even, otherwise answer "no"', getOddOrEvenNumber);

export default startEvenGame;
