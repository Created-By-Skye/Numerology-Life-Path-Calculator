const express = require("express");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");

// read
router.get("/", (req, res) => {
  const { name } = req.query;
  ProfileCollection.findOne({ name }, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;
