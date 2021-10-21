const express = require("express");
const getSign = require("horoscope").getSign;
const lifePathNumber = require("../lifepath.js");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");

// create
router.post("/", (req, res) => {
  let { name, birthMonth, birthDay, birthYear, gender, email } = req.query;

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
    email,
  };

  ProfileCollection.create(newProfile, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});


// +1 get all
router.get("/", (_, res) => {
  ProfileCollection.find({}, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

// +1 get all for particular user
router.get("/user", (req, res) => {
  const { email } = req.query;
  ProfileCollection.find({ email }, (err, results) => {
    err ? res.send(err) : res.send(results)
  });
});

module.exports = router;
