const express = require("express");
const router = express.Router();
const lifePathModel = require("../models/LifePathSchema");

router.get("/", (_, res) => {
  const lifePaths = [
    new lifePathModel({
      pathNumber: 1,
      title: "The Natural Born Leader",
      description:
        "The Life Path 1 is one of leadership and trailblazing. With a strong sense of independence, you do not like relying on other people, especially if you feel they are holding you back. Often, you may feel like it is better to go it alone.",
    }),
    new lifePathModel({
      pathNumber: 2,
      title: "The Diplomat",
      description:
        "As a Life Path 2 you will find yourself attracted to a life of building and nurturing relationships. You bring unity and compassion to the world with your big heart and have a tendency to bring out the good in people in your life.",
    }),
    new lifePathModel({
      pathNumber: 3,
      title: "The Creative",
      description:
        "People with a Life Path 3 are the most artistic in the bunch. You find ways of creating the most beautiful things in this world such as art, music, literature, etc. You breathe life into culture, and make it seem so simple because of your natural gift for expression.",
    }),
  ];

  lifePathModel.create(lifePaths, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;
