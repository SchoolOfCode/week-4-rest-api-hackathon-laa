
import express from "express";
const app = express();
const PORT = 3000;

import { getGames, getGameByName, addGame } from "./functions.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hi there! This is the steam games REST API");
});



app.get("/games", async function (req, res) {
  // respond with the array of quotes
  // this function would: get quotes, respond with them
  const allGames = await getGames();
  res.json(allGames);
  console.log("this is / games", JSON.stringify(allGames))
});

app.get('/games/name/:gameName', async function (req, res) {
  try {
    const gameName = req.params.gameName;
    console.log(`Searching for game: ${gameName}`);

    const game = await getGameByName(gameName);
    
    if (game) {
      res.json(game); // Return the found game
    } else {
      res.status(404).json({ error: `Game with name "${gameName}" not found` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to load game data' });
  }
});

// MVP 3:
// Post a new data 

app.post("/games", async function (req, res) {
  try {
    const newGame = req.body; // The new game data is in the request body
    if (!newGame || !newGame.name || !newGame.price) {
      return res.status(400).json({ error: "Missing required fields: name, price" });
    }

    // Call the function to add the game
    const addedGame = await addGame(newGame);
    res.status(201).json(addedGame); // Respond with the newly added game
  } catch (error) {
    res.status(500).json({ error: "Failed to add new game" });
  }
});




app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});