const express = require("express");
const Question = require("../models/Question");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    q_body: req.body.q_body,
    writer_name: req.body.writer_name,
  });
  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
    console.log(req.body);
  } catch (err) {
    res.json({ message: err });
    console.log(req.body);
  }
});

module.exports = router;
