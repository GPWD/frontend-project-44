import getRandomNumberInclusive from '../helper.js';

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

export default getOddOrEvenNumber;
