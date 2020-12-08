const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const feedbackRoute = require("./routes/feedback.routes");

mongoose.connect(
  "mongodb+srv://prat2808:prat2808@cluster0.cux24.mongodb.net/quizdb?retryWrites=true&w=majority",
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
)
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/feedback", feedbackRoute);
const PORT = 4200;
app.listen(PORT, console.log(`Server started at port: ${PORT}`));

