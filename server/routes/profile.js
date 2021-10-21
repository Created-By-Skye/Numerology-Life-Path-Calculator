const express = require("express");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");

// read
// ex of how to access from frontend
// const getProfileByName = async () => {
//   const { data } = await axios.get("http://localhost:3001/profile", {
//     params: { name: "Brandon" },
//   });
//   // do something with data afterwards, like setting state
// };
router.get("/", (req, res) => {
  const { name } = req.query;
  ProfileCollection.findOne({ name }, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

// update
// ex to access from frontend
// const updateProfile = async (id) => {
//   await axios.put(`http://localhost:3001/profile/${id}`, {
//     name: "Sam",
//     birthMonth: 5,
//     birthDay: 10,
//     birthYear: 1999,
//     gender: "Female",
//     lifePath: 10,
//     zodiacSign: "Taurus",
//     email: "happysolucki@gmail.com",
//   });
// };
router.put("/:id", (req, res) => {
  ProfileCollection.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, results) => {
      err ? res.send(err) : res.send(results);
    }
  );
});

// delete
// ex to access from frontend
// const deleteProfile = async (id) => {
//   await axios.delete(`http://localhost:3001/profile/${id}`, {
//     params: { email: "happysolucki@gmail.com" },
//   });
// };
router.delete("/:id", (req, res) => {
  ProfileCollection.findOneAndDelete(
    { email: req.query.email, _id: req.params.id },
    (err, results) => {
      err ? res.send(err) : res.send(results);
    }
  );
  // ProfileCollection.findByIdAndDelete(req.params.id, (err, results) => {
  //   err ? res.send(err) : res.send(results);
  // });
});

// router.get("/user", (req, res) => {
//   const { email } = req.query;
//   ProfileCollection.find({ email }, (err, results) => {
//     err ? res.send(err) : res.send(results)
//   });
// });

module.exports = router;
