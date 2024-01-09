import getRandomNumberInclusive from '../helper.js';

const primeNumber = () => {
  const randomNumber = getRandomNumberInclusive(0, 100);
  let correctAnswer;

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

export default primeNumber;
