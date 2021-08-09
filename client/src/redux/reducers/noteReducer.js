import { ADD_NOTE, DELETE_NOTE, GET_NOTES_SUCCESS, SAVE_NOTE_SUCCESS } from "../typeConstants/noteTypeConstants";

const initialState = {

};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NOTES_SUCCESS: 
            return {
                ...state,
                notes: action.payload
            }
        case ADD_NOTE: {
            const newNote = {
                noteContent: action.payload.noteContent,
                noteId: action.payload.noteId,
            }
            return {
                ...state,
                notes: [...state.notes, newNote]
            }
        }
        case DELETE_NOTE: 
            return {
                ...state,
                notes: state.notes.filter( note => note.noteId !== action.payload )
            }
        default: return state
    }
}