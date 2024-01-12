import getRandomNumberInclusive from '../helper.js';
import playGame from '../index.js';

const findGreatestCommonDivisor = (operandOne, operandTwo) => {
  let numOne = operandOne;
  let numTwo = operandTwo;

  while (numOne > 0 && numTwo > 0) {
    if (numOne >= numTwo) {
      numOne %= numTwo;
    } else {
      numTwo %= numOne;
    }
  }

  return Math.max(numOne, numTwo);
};

const getGreatestCommonDivisor = () => {
  const randomNumOne = getRandomNumberInclusive(0, 50);
  const randomNumTwo = getRandomNumberInclusive(0, 50);

  const numbersForQuestion = `${randomNumOne} ${randomNumTwo}`;
  const correctAnswer = findGreatestCommonDivisor(randomNumOne, randomNumTwo);

  return [numbersForQuestion, correctAnswer];
};

const startGcdGame = () => playGame('Find the greatest common divisor of given numbers.', getGreatestCommonDivisor);

export default startGcdGame;
