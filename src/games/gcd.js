import getRandomNumberInclusive from '../helper.js';

const getGreatestCommonDivisor = () => {
  let numOne = getRandomNumberInclusive(0, 50);
  let numTwo = getRandomNumberInclusive(0, 50);
  const numbersForQuestion = `${numOne} ${numTwo}`;

  while (numOne > 0 && numTwo > 0) {
    if (numOne >= numTwo) {
      numOne %= numTwo;
    } else {
      numTwo %= numOne;
    }
  }
  const correctAnswer = Math.max(numOne, numTwo);

  return [numbersForQuestion, correctAnswer];
};

export default getGreatestCommonDivisor;
