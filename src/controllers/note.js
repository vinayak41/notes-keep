const { listeners } = require("../models/note");
const Note = require("../models/note");

exports.addNote = (req, res) => {
  const { noteContent, noteId, userId } = req.body;

  const newNote = new Note({
    noteContent,
    noteId,
    userId
  });

  newNote.save((err, result) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    if (result) {
      res.status(200).json({ message: "note saved successfuly" });
    }
  });
};

exports.getNotes = async (req, res) => {
  const { userId } = req.body;
  const notes = await Note.find({ userId });
  if (notes) return res.status(200).json({ notes });
  return res.status(200).json({ notes: [] });
};

exports.deleteNoteForever = async (req, res) => {
  const noteId = req.params.id;
  const userId = req.body.userId;
  const deletedNote = await Note.findOneAndDelete({
    $and: [{ noteId }, { userId }]
  });
  res.status(200).json({ deletedNote });
};

exports.updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { isDeleted, color } = req.body;
  let note = await Note.findOne({ noteId });
  if (note) {
    if (typeof isDeleted !== "undefined") {
      await Note.findOneAndUpdate({ noteId }, { isDeleted });
    }
    if (typeof color !== "undefined") {
      await Note.findOneAndUpdate({ noteId }, { color });
    }
    return res.status(200).json({ note });
  }
  return res.status(400).json({ message: "Something went wrong" });
};
