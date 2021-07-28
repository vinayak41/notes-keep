import { ADD_NOTE } from "../typeConstants/noteTypeConstants";

export const addNote = (note, noteId) => {
  return {
    type: ADD_NOTE,
    payload: {
      note: note,
      noteId: noteId
    }
  };
};