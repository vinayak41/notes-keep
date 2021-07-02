const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");

const app = express();

env.config();

const PORT = process.env.PORT;

console.log(process.env.DB_USER,process.env.DB_PASSWORD,process.env.DB_NAME)

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yj5lf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
).then(()=>{
    console.log('Database connected')
}).catch(error => {
    console.log(error)
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

console.log(`server running at port ${PORT}`);
app.listen(PORT);
