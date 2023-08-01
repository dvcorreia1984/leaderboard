import './style.css';
import postScore from './modules/postscore.js';
import displayScores from './modules/getscores.js';

// get input from user
const userInput = document.getElementById('username');
const scoreInput = document.getElementById('score');
const submitBtn = document.getElementById('submit');

// add event listener to submit button
submitBtn.addEventListener('click', () => {
  postScore(userInput.value, scoreInput.value);
});

postScore(userInput.value, scoreInput.value);

displayScores();

// add event listener to refresh button
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
