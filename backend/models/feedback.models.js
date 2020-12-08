const mongoose = require("mongoose");
const FeedbackSchema = mongoose.Schema({
  qname: {
    type: String,
    required: true
  },
  qid: {
    type: String,
    required: true
  },
  mmarks: {
    type: String,
    required: true
  },
  question1: {
    type: String,
    required: true
  },
  question2: {
    type: String,
    required: true
  },
  q1op1: {
    type: String,
    required: true
  },
  q1op2: {
    type: String,
    required: true
  },
  q1op3: {
    type: String,
    required: true
  },q1op4: {
    type: String,
    required: true
  },q1cop: {
    type: String,
    required: true
  },q2op1: {
    type: String,
    required: true
  },q2op2: {
    type: String,
    required: true
  },q2op3: {
    type: String,
    required: true
  },q2op4: {
    type: String,
    required: true
  },q2cop: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model("feedback", FeedbackSchema);