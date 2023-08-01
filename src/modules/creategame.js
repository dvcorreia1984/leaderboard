const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const newGameId = 'PcyRVQuHfmZWT0Mw7QIk';

function createNewGame() {
  const apiUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

  const data = {
    name: "My cool new game",
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Game created successfully! Game ID:", result.result.split(": ")[1]);
    })
    .catch((error) => {
      console.error("Failed to create the game:", error);
    });
}

// Call the function to create a new game
createNewGame();

export { apiUrl, newGameId };
