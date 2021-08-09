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

exports.deleteNote = async (req, res) => {
    const noteId = req.params.id;
    const userId = req.body.userId;
    console.log(noteId)
    const deletedNote = await Note.findOneAndDelete({
        $and: [{ noteId }, { userId }]
    });
    res.status(200).json({ deletedNote });
};
