require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const seedProfilesRouter = require("./routes/seed-profiles.js");
const seedNumerologyRouter = require("./routes/seed-numerology.js");
const profileRouter = require("./routes/profiles.js");
const profilesRouter = require("./routes/profiles.js");

// set up mongodb connection
const mongoDB =
  "mongodb+srv://happysolucki:WatchMyBack29@cluster0.knrt8.mongodb.net/code301?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// set up express server
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get("/test", (_, res) => {
  res.send("test request received");
});

// set endpoints for seeding
app.use("/seed/profiles", seedProfilesRouter);
app.use("/seed/numerology", seedNumerologyRouter);

// set endpoint for app functionality
app.use("/profile", profileRouter);
app.use("/profiles", profilesRouter);

// set up express server listening
app.listen(PORT, () => console.log(`listening on ${PORT}`));
