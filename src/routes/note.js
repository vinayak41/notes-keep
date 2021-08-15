const express = require('express');
const { requireSignIn } = require('../controllers/commonControllers');
const router = express.Router();
const {addNote, getNotes, deleteNoteForever, updateNote} = require("../controllers/note")

router.post("/", requireSignIn , addNote);
router.get("/", requireSignIn, getNotes);
router.delete("/:id", requireSignIn, deleteNoteForever)
router.put("/:id", requireSignIn, updateNote)

module.exports = router;