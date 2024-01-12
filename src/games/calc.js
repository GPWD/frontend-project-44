import getRandomNumberInclusive from '../helper.js';
import playGame from '../index.js';

const сalculate = (operandOne, op, operandTwo) => {
  const operations = {
    add: '+',
    sub: '-',
    mlt: '*',
  };

  const numOne = Number(operandOne);
  const numTwo = Number(operandTwo);

  switch (op) {
    case operations.add:
      return numOne + numTwo;
    case operations.sub:
      return numOne - numTwo;
    case operations.mlt:
      return numOne * numTwo;
    default:
      return null;
  }
};

const getRandomExpression = () => {
  const numberOne = getRandomNumberInclusive(0, 100);
  const numberTwo = getRandomNumberInclusive(0, 10);
  const randomIndex = getRandomNumberInclusive(0, 2);
  const listOpertions = ['+', '*', '-'];

  const expression = `${numberOne} ${listOpertions[randomIndex]} ${numberTwo}`;
  const correctAnswer = сalculate(numberOne, listOpertions[randomIndex], numberTwo);

  return [expression, correctAnswer];
};

const startCalcGame = () => playGame('What is the result of the expression?', getRandomExpression);

export default startCalcGame;
