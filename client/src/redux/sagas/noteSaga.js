import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { NOTE_API } from "../../utils/api"
import {ADD_NOTE, ADD_NOTE_SUCCESS, ADD_NOTE_FAILURE} from "../typeConstants/noteTypeConstants"

function* saveNote(action) {
    try {
        console.log(typeof(NOTE_API))
        yield call(axios({
            method: 'post',
            url: `${NOTE_API}`,
            data: {
                note: action.payload.note,
                noteId: action.payload.noteId
            }
        }))

        yield put({type: ADD_NOTE_SUCCESS})
    }
    catch(err) {
        console.log(err)
        yield put({type: ADD_NOTE_FAILURE})
    }
}

export default function* noteSaga() {
    yield takeEvery( ADD_NOTE, saveNote)
}