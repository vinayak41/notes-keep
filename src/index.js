const express = require('express');
const env = require('dotenv');

const app = express();

env.config();

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).json({message: "hello world"})
})

console.log("server runnig at port 8000")
app.listen(PORT);