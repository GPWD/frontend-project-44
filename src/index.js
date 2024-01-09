import readlineSync from 'readline-sync';

const playGame = (condition, questionData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(`${condition}`);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = questionData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}'  is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
