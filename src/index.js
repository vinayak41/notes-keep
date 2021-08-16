const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const noteRoutes = require("./routes/note");
const path = require("path");

const app = express();
env.config();
const PORT = process.env.PORT;

app.use(cors());

//connect database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yj5lf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
).then(()=>{
    console.log('Database connected')
}).catch(error => {
    console.log(error)
});

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/note", noteRoutes)
app.use("/user",  userRoutes);

console.log(`server running at port ${PORT}`);

if( process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
  })
}

app.listen(PORT);
