require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const seedProfilesRouter = require("./routes/seed-profiles.js");
const seedNumerologyRouter = require("./routes/seed-numerology.js");

mongoose.connect(process.env.DATABASE_URL, {});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/test", (_, res) => {
  res.send("test request received");
});

app.use("/seed/profiles", seedProfilesRouter);
app.use("/seed/numerology", seedNumerologyRouter);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
