import getRandomNumberInclusive from '../helper.js';

const getRandomProgression = () => {
  const step = getRandomNumberInclusive(1, 50);
  const progressionLength = getRandomNumberInclusive(5, 10);
  const randomPosition = getRandomNumberInclusive(0, (progressionLength - 1));
  const progression = [];

  for (let i = step; i <= (step * progressionLength); i += step) {
    progression.push(i);
  }
  const correctAnswer = progression[randomPosition];
  progression[randomPosition] = '..';
  const progressionToString = progression.join(' ');

  return [progressionToString, correctAnswer];
};

export default getRandomProgression;
