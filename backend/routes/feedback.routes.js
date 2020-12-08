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
  const qname = req.body.qname;
  const qid = req.body.qid;
  const mmarks = req.body.mmarks;
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const q1op1 = req.body.q1op1;
  const q1op2 = req.body.q1op2;
  const q1op3 = req.body.q1op3;
  const q1op4 = req.body.q1op4;
  const q1cop = req.body.q1cop;
  const q2op1 = req.body.q2op1;
  const q2op2 = req.body.q2op2;
  const q2op3 = req.body.q2op3;
  const q2op4 = req.body.q2op4;
  const q2cop = req.body.q2cop;
  const feedbackItem = Feedback({
    qname: qname,
      qid: qid,
      mmarks: mmarks,
      question1: question1,
      q1op1: q1op1,
      q1op2: q1op2,
      q1op3: q1op3,
      q1op4: q1op4,
      q1cop: q1cop,
      question2: question2,
      q2op1: q2op1,
      q2op2: q2op2,
      q2op3: q2op3,
      q2op4: q2op4,
      q2cop: q2cop
  })
  try {
    const savedFeedback = await feedbackItem.save();
    res.json(savedFeedback);
  } catch (err) {
    console.log(err);}
});
route.post("/quiz", async (req, res) => {
  const ans1 = req.body.q1;
  const ans2 = req.body.q2;
  const ca1 = "Hyper Text Markup Language";
  const ca2 = "Cascading style sheet";
  const marks = 0;
  if(ca1==ans1){
    marks=marks+1;
  }
  if(ca2==ans2){
    marks=marks+1;
  }

  res.write("Marks: "+marks);
  

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