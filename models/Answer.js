const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
  a_body: {
    type: String,
    required: true,
  },
  writer_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Answer", AnswerSchema);
