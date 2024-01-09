#!/usr/bin/env node
import playGame from '../src/index.js';
import getRandomProgression from '../src/games/progression.js';

playGame('What number is missing in the progression?', getRandomProgression);
