const express = require('express');
const { requireSignIn } = require('../controllers/commonControllers');
const router = express.Router();
const {addNote, getNotes, deleteNote} = require("../controllers/note")

router.post("/", requireSignIn , addNote);
router.get("/", requireSignIn, getNotes);
router.delete("/:id", requireSignIn, deleteNote)

module.exports = router;