const mongoose = require("mongoose");
const questionSchema = require("../questions/questions.schema.server");
const quizAttemptsSchema = mongoose.Schema(
  {
    score: Number,
    quiz: { type: String, ref: "QuizModel" },
    answers: [questionSchema],
  },
  { collection: "quizAttempts" }
);
module.exports = quizAttemptsSchema;
