const express = require("express");
const getSign = require("horoscope").getSign;
const lifePathNumber = require("../lifepath.js");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");

// create
router.post("/", (req, res) => {
  let { name, birthMonth, birthDay, birthYear, gender } = req.query;

  birthMonth = Number(birthMonth);
  birthDay = Number(birthDay);
  birthYear = Number(birthYear);

  const zodiacSign = getSign({ month: birthMonth, day: birthDay });

  const lifePath = lifePathNumber(
    (birthYear + birthMonth + birthDay).toString()
  );

  const newProfile = {
    name,
    birthMonth,
    birthDay,
    birthYear,
    gender,
    lifePath,
    zodiacSign,
  };

  ProfileCollection.create(newProfile, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

// delete
router.delete("/:id", (req, res) => {
  ProfileCollection.findByIdAndDelete(req.params.id, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

// +1 get all
router.get("/", (_, res) => {
  ProfileCollection.find({}, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;
