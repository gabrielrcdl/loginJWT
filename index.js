require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,

  (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Conectado à base de dados");
  }
);

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Running...");
});
