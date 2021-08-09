const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    noteContent: {type: String, required: true},
    noteId: {type: String, required: true},
    color: {type: String},
    isDelete: {type: Boolean, default: false},
    tags: [
        {type: String}
    ],
    userId: {type: String, required: true}
}, {collation: "notes", timestamps: true});

module.exports = mongoose.model("Note", noteSchema)