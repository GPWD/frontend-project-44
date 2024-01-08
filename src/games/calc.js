import getRandomNumber from '../helper.js';

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
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(10);
  const randomIndex = getRandomNumber(3);
  const listOpertions = ['+', '*', '-'];

  const expression = `${numberOne} ${listOpertions[randomIndex]} ${numberTwo}`;
  const correctAnswer = сalculate(numberOne, listOpertions[randomIndex], numberTwo);

  return [expression, correctAnswer];
};

export default getRandomExpression;
