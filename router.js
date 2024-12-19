import express from "express";
const app = express();
const PORT = 3000;

import { getGames } from "./functions.js";

app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});

app.get("/games", async function (req, res) {
  // respond with the array of quotes
  // this function would: get quotes, respond with them
  const gamesArray = await getGames();
  res.json(gamesArray);
});
