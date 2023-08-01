import { apiUrl, newGameId } from './creategame.js';

const getScores = async () => {
  const response = await fetch(`${apiUrl}${newGameId}/scores/`);
  const data = await response.json();
  return data;
};

const displayScores = async () => {
  let color = 'white';
  const scores = await getScores();
  const scoreList = document.getElementById('scoreboard');
  scores.result.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add(color);
    li.innerHTML = `${score.user}: ${score.score}`;
    scoreList.appendChild(li);
    if (color === 'white') {
      color = 'grey';
    } else {
      color = 'white';
    }
  });
};
export default displayScores;