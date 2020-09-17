const express = require("express");
const Question = require("../models/Question");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.header({
      "Access-Control-Allow-Origin": "*",
    });
    res.json(questions);
    console.log(res.header);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    q_body: req.body.q_body,
    writer_name: req.body.writer_name,
  });
  res.header({
    "Access-Control-Allow-Origin": "*",
  });
  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
