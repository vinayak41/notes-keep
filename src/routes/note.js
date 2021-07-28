const express = require('express');
const router = express.Router();
const {addNote} = require("../controllers/note")

router.post("/", addNote)

module.exports = router;