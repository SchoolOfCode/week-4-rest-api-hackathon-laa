import fs from 'node:fs/promises';

//gather all data from games.json 
//async function becasue we are asking to grab something
//make the data await
//read the file inside games 
//return all data as a json (parse?)
//
export async function getGames() {
  try {
    const data = await fs.readFile("./games.json");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}


export async function getGameByName(name) {
  try {
    // Get all games from the JSON file
    const allGames = await getGames();
    // Loop through the games and find one by name
    for (const gameId in allGames) {
      if (allGames[gameId].name.toLowerCase() === name.toLowerCase()) {
        console.log("Game found:", allGames[gameId]); // Log if game is found
        return allGames[gameId];
      }
    }

    // If no game is found, return null
    console.log("Game not found");
    return null;
  } catch (error) {
    console.error("Error searching for game by name:", error);
    throw error; // Re-throw the error for further handling
  }
}

export async function addGame(newGame) {
  try {
    // Get existing games
    const allGames = await getGames();
    // Generate a new unique ID for the game
    const newId = Date.now().toString();
    // Add the new game to the collection
    allGames[newId] = newGame;
    // Write the updated games collection back to the file
    await fs.writeFile("./games.json", JSON.stringify(allGames, null, 2));
    return { id: newId, ...newGame };
  } catch (error) {
    console.error("Error adding new game:", error);
    throw error;
  }
}
