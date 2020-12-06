const route = require("express").Router();
const Feedback = require("../models/feedback.models");
route.get("/",async (req, res) => {
  try {
    const foundFeedback = await Feedback.find();
    res.json(foundFeedback);
  } catch (err) {
    console.log(err)}
});
route.post("/", async (req, res) => {
  const feedback = req.body.feedback;
  const feedbackItem = new Feedback({
    feedback: feedback})
  try {
    const savedFeedback = await feedbackItem.save();
    res.json(savedFeedback);
  } catch (err) {
    console.log(err);}
});
route.delete("/:id",async (req, res) => {
  const feedbackId = req.params.id
  try {
    const deletedItem = await Feedback.deleteOne({_id: feedbackId});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)}
});
module.exports = route;