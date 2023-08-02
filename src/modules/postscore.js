import { apiUrl, newGameId } from './creategame.js';

const postScore = async (user, score) => {
  const response = await fetch(`${apiUrl}${newGameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data;
};

export default postScore;