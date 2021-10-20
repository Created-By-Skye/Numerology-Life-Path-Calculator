const express = require("express");
const router = express.Router();
const profileModel = require("../models/ProfileSchema");

router.get("/", (_, res) => {
  const profiles = [
    new profileModel({
      name: "Brandon",
      birthMonth: 11,
      birthDay: 29,
      birthYear: 1998,
      gender: "Male",
      lifePath: 4,
      zodiacSign: "Sagittarius",
    }),
    new profileModel({
      name: "Javion",
      birthMonth: 11,
      birthDay: 8,
      birthYear: 1999,
      gender: "Male",
      lifePath: 1,
      zodiacSign: "Scorpio",
    }),
    new profileModel({
      name: "Breonna",
      birthMonth: 5,
      birthDay: 10,
      birthYear: 1993,
      gender: "Female",
      lifePath: 10,
      zodiacSign: "Taurus",
    }),
  ];

  profileModel.create(profiles, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;
