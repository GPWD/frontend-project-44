#!/usr/bin/env node
import playGame from '../src/index.js';
import getGreatestCommonDivisor from '../src/games/gcd.js';

playGame('Find the greatest common divisor of given numbers.', getGreatestCommonDivisor);
