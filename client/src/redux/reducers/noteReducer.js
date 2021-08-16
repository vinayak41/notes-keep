import {
  ADD_NOTE,
  CHANGE_NOTE_BG_COLOR,
  DELETE_NOTE,
  DELETE_NOTE_FOREVER,
  GET_NOTES_SUCCESS,
  RESTORE_NOTE,
  SAVE_NOTE_SUCCESS,
  UPDATE_NOTE_CONTENT
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
    case CHANGE_NOTE_BG_COLOR:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.noteId === action.payload.noteId) {
            return {...note, color: action.payload.color}
          }
          return note;
        })
      }
    case UPDATE_NOTE_CONTENT: 
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.noteId === action.payload.noteId) {
            return {...note, noteContent: action.payload.noteContent}
          }
          return note;
        })
      }
    default:
      return state;
  }
};
