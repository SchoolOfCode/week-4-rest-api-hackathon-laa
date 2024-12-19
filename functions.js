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
