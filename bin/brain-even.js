#!/usr/bin/env node
import playGame from '../src/index.js';
import getOddOrEvenNumber from '../src/games/even.js';

playGame('Answer "yes" if the number is even, otherwise answer "no"', getOddOrEvenNumber);
