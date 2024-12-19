import games from "./games.json" with { type: "json" };

import fs from "node:fs/promises";

export async function getGames() {
  try {
    const data = await fs.readFile("./games.json");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
const gamesObject = getGames()
let GamesArray = gamesObject.map((data) => ({data}))




// export async function getGameByName(name){
//   try{

// //   //get all the games from the json
// //   const allGames = await getGames()
// // // get game name that of a specfic name as an argument 
// // for (const name in allGames.name){
// //   if (allGames.name == name)
// //     console.log("working")
// // }
// //   } catch (error){
// //     console.error("Error reading file:", error);
// //   }


// for loop search though all the games
//return the object that matches that name 
