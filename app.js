import express from "express";

// Import the gamesRouter
import gamesRouter from "./router.js";

// Create an instance of an Express application
const app = express();

app.use(express.json());

// Use the gamesRouter for any requests to the /games path
app.use("/games", gamesRouter);

// Export the app instance so it can be used in other files
export default app;
