const Note = require("../models/note");

exports.addNote = (req, res) => {
    const { note, noteId } = req.body;
    
    const newNote = new Note({
        note: note,
        noteId: noteId
    })

    newNote.save( (err, result) => {
        if(err) {
            res.status(400).json({error: err});
        }
        if(result) {
            res.status(200).json({message: "note saved successfuly"})
        }
    })
}