import { fork, all } from "redux-saga/effects";
import noteSaga from "./noteSaga";

export default function* rootSaga() {
    yield all([
        fork(noteSaga)
        // fork(saga1)  
        // fork(saga2)  
    ]);
}