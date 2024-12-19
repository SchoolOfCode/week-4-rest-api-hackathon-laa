// // THIS IS OUR ROOT DIRECTORY

// import express from "express";

// // import the gamesRouter
// import gamesRouter from "./router.js";

// // create the express application
// const app = express();

// app.use(express.json());

// // Use the gamesRouter for any requests to the /games path
// app.use("/games", gamesRouter);

// // Export the app instance so it can be used in other files
// export default app;

import express from "express";
const app = express();
const PORT = 3000;

import { getGames } from "./functions.js";
import { getGameByName } from "./functions.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hi there! This is the steam games REST API");
});

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});

app.get("/games", async function (req, res) {
  // respond with the array of quotes
  // this function would: get quotes, respond with them
  const allGames = await getGames();
  res.json(allGames);
  console.log("this is / games", JSON.stringify(allGames))
});

app.get("/games/:id", async function (req, res) {
    // respond with the array of quotes
    // this function would: get quotes, respond with them
    const gamesName = await getGameByName("Galactic Bowling");
    res.json(gamesName);
    console.log("this is / games/names", JSON.stringify(gamesName))
  });