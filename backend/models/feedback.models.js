const mongoose = require("mongoose");
const FeedbackSchema = mongoose.Schema({
  feedback: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("feedback", FeedbackSchema);