import { ADD_NOTE, DELETE_NOTE, GET_NOTES_REQUEST } from "../typeConstants/noteTypeConstants";

export const addNote = (noteContent, noteId) => {
  return {
    type: ADD_NOTE,
    payload: {
      noteContent,
      noteId
    }
  };
};

export const getNotes = () => {
  return {
    type: GET_NOTES_REQUEST,
  }
}

export const deleteNote = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId
  }
}
