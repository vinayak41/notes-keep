import { ADD_NOTE, CHANGE_NOTE_BG_COLOR, DELETE_NOTE, DELETE_NOTE_FOREVER, GET_NOTES_REQUEST, RESTORE_NOTE, UPDATE_NOTE_CONTENT } from "../typeConstants/noteTypeConstants";
export const addNote = (noteContent, noteId) => {
  return {
    type: ADD_NOTE,
    payload: {
      noteContent,
      noteId
    }
  };
};

export const getNotes = (token) => {
  return {
    type: GET_NOTES_REQUEST,
    payload: token
 }
}

export const deleteNoteForever = (noteId) => {
  return {
    type: DELETE_NOTE_FOREVER,
    payload: noteId
  }
}

export const deleteNote = (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId
  }
}

export const restoreNote = (noteId) => {
  return {
    type: RESTORE_NOTE,
    payload: noteId
  }
}

export const changeNoteBgColor = (noteId, color) => {
  return {
    type: CHANGE_NOTE_BG_COLOR,
    payload: {
      noteId,
      color
    }
  }
}

export const updateNoteContent = (noteId, noteContent) => {
  return {
    type: UPDATE_NOTE_CONTENT,
    payload: {
      noteId,
      noteContent
    }
  }
}