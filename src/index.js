import './style.css';
import postScore from './modules/postscore.js';
import displayScores from './modules/getscores.js';

// get input from user
const userInput = document.getElementById('username');
const scoreInput = document.getElementById('score');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
  userInput.value = userInput.value.trim();
  scoreInput.value = scoreInput.value.trim();
  postScore(userInput.value, scoreInput.value);
  userInput.value = '';
  scoreInput.value = '';
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  displayScores();
});