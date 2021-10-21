const express = require("express");
const getSign = require("horoscope").getSign;
const lifePathNumber = require("../lifepath.js");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");

// create
// ex of how to access from frontend
// const createProfile = async () => {
//   const { data } = await axios.post("http://localhost:3001/profiles", {
//     name: "Samara",
//     birthMonth: 2,
//     birthDay: 11,
//     birthYear: 1999,
//     gender: "Female",
//     email: "samara@gmail.com",
//   });
//   // do what you want with data, like setting state
// };
router.post("/", (req, res) => {
  const bodyData = req.body;
  // res.send(`Birth month: ${req.body.birthMonth}`);

  // let { name, birthMonth, birthDay, birthYear, gender, email } = req.query;

  // birthMonth = Number(birthMonth);
  // birthDay = Number(birthDay);
  // birthYear = Number(birthYear);

  const zodiacSign = getSign({
    month: bodyData.birthMonth,
    day: bodyData.birthDay,
  });

  const lifePath = lifePathNumber(
    (bodyData.birthYear + bodyData.birthMonth + bodyData.birthDay).toString()
  );

  const newProfile = { ...bodyData, zodiacSign, lifePath };
  // const newProfile = {
  //   name,
  //   birthMonth,
  //   birthDay,
  //   birthYear,
  //   gender,
  //   lifePath,
  //   zodiacSign,
  //   email,
  // };

  ProfileCollection.create(newProfile, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

// +1 get all
// Example for calling this from frontend
// const getAllProfiles = async () => {
//   const { data } = await axios.get("http://localhost:3001/profiles");
//   // do what you want with data, like setting state
// };

router.get("/", (_, res) => {
  ProfileCollection.find({}, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

// +1 get all for particular user
// Example for calling this from frontend
// const getCurrentUserProfiles = async () => {
//   const { data } = await axios.get("http://localhost:3001/profiles/user", {
//     params: { email: "user@example.com" },
//   });
//     // do what you want with data, like setting state
// };

router.get("/user", (req, res) => {
  const { email } = req.query;
  ProfileCollection.find({ email }, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;
