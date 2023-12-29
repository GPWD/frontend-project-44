#!/usr/bin/env node
import readlineSync from 'readline-sync';

const showGreeting = () => console.log('Welcome to the Brain Games!');
showGreeting();

const userName = readlineSync.question('May I have your name? ');
const greetingUser = () => console.log(`Hello, ${userName}!`);
greetingUser();

const showRuleGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
showRuleGame();

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const showQuestion = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((userAnswer === 'yes' && randomNumber % 2 === 0) || (userAnswer === 'no' && randomNumber % 2 !== 0)) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

showQuestion();
