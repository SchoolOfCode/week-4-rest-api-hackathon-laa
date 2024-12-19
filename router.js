import express from "express";
const app = express();

import { getGames } from "./functions.js";

app.use(express.json());

app.get("/games", async function (req, res) {
  // respond with the array of quotes
  // this function would: get quotes, respond with them
  const gamesArray = await getGames();
  res.json(gamesArray);
});

const router = express.Router();

export default router;
