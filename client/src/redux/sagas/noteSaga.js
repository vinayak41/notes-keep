import axios from "axios";
import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { NOTE_API } from "../../utils/api";
import {
    ADD_NOTE,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    GET_NOTES_REQUEST,
    GET_NOTES_SUCCESS,
    DELETE_NOTE,
    DELETE_NOTE_FOREVER,
    RESTORE_NOTE,
    CHANGE_NOTE_BG_COLOR
} from "../typeConstants/noteTypeConstants";

const token = sessionStorage.getItem("token")

function* saveNote(action) {
    try {
        yield call(
            axios({
                method: "post",
                url: `${NOTE_API}`,
                data: {
                    noteContent: action.payload.noteContent,
                    noteId: action.payload.noteId
                },
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
        );
        // yield put({ type: ADD_NOTE_SUCCESS });
    } catch (err) {
        console.log(err);
        // yield put({ type: ADD_NOTE_FAILURE });
    }
}

function* getNotes(action) {
    try {
         const response =  yield call(axios,{
             method: "get",
             url: `${NOTE_API}`,
             headers: {
                authorization: `Bearer ${token}`
            }
         })
         console.log(response.data.notes)
         yield put({type: GET_NOTES_SUCCESS, payload: response.data.notes})
    } catch (error) {

    }
}

function* deleteNoteForever(action) {
    try {
        yield call(axios,{
            method: 'delete',
            url: `${NOTE_API}/${action.payload}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    } catch(error) {
        console.log(error)
    }
}

function* deleteNote(action) {
    try {
        yield call(axios({
            method: 'put',
            url: `${NOTE_API}/${action.payload}`,
            data: {
                isDeleted: true
            },
            headers: {
                authorization: `Bearer ${token}`
            }
        }))
    } catch(err) {
        console.log(err)
    }
}

function* restoreNote(action) {
    try {
        yield call(axios({
            method: 'put',
            url: `${NOTE_API}/${action.payload}`,
            data: {
                isDeleted: false
            },
            headers: {
                authorization: `Bearer ${token}`
            }
        }))
    } catch(err) {
        console.log(err)
    }
}

function* changeNoteBgColor(action) {
    try {
        yield call(axios({
            method: 'put',
            url: `${NOTE_API}/${action.payload.noteId}`,
            data: {
                color: action.payload.color
            },
            headers: {
                authorization: `Bearer ${token}`
            }
        }))
    } catch(err) {
        console.log(err)
    }
}

export default function* noteSaga() {
    yield takeEvery(ADD_NOTE, saveNote);
    yield takeEvery(GET_NOTES_REQUEST, getNotes);
    yield takeEvery(DELETE_NOTE_FOREVER, deleteNoteForever)
    yield takeEvery(DELETE_NOTE, deleteNote)
    yield takeEvery(RESTORE_NOTE, restoreNote)
    yield takeEvery(CHANGE_NOTE_BG_COLOR, changeNoteBgColor)
}
