const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const feedbackRoute = require("./routes/feedback.routes");
//mongodb+srv://yusuf:<password>@cluster0.r5w3n.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb+srv://yusuf:fun@cluster0.r5w3n.mongodb.net/web?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/feedback", feedbackRoute);
const PORT = 3000;
app.listen(PORT, console.log(`Server started at port: ${PORT}`));

