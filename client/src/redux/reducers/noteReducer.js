import {
  ADD_NOTE,
  DELETE_NOTE,
  DELETE_NOTE_FOREVER,
  GET_NOTES_SUCCESS,
  RESTORE_NOTE,
  SAVE_NOTE_SUCCESS
} from "../typeConstants/noteTypeConstants";

const initialState = {
  notes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload
      };
    case ADD_NOTE: {
      const newNote = {
        noteContent: action.payload.noteContent,
        noteId: action.payload.noteId,
        isDeleted: false
      };
      return {
        ...state,
        notes: [...state.notes, newNote]
      };
    }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.noteId === action.payload) {
            return { ...note, isDeleted: true };
          }
          return note;
        })
      };
    case DELETE_NOTE_FOREVER:
      return {
        ...state,
        notes: state.notes.filter((note) => note.noteId !== action.payload)
      };
    case RESTORE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.noteId === action.payload) {
            return { ...note, isDeleted: false };
          }
          return note;
        })
      };
    default:
      return state;
  }
};
