import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { USER_API, USER_SIGNIN_API, USER_SIGUP_API } from "../../utils/api";
import { showSnakcBar } from "../actions/snackBarActions";
import {
  setUser,
  signInFailure,
  signInSuccess,
  // signUpFailure,
  // signUpSuccess,
} from "../actions/userActions";
import {
  GET_USER_REQUEST,
  SIGNIN_REQUEST,
  SIGNUP_REQUEST,
} from "../typeConstants/userTypeConstants";

function* signUp(action) {
  try {
    yield call(axios, {
      method: "post",
      url: `${USER_SIGUP_API}`,
      data: action.payload,
    });
    action.history.push("/signin")
    yield put(showSnakcBar("Sigup Successful", "success"))
  } catch (error) {
    console.log(error)
    const errorMsg = error.response.data.message;
    console.log(errorMsg)
    yield put(showSnakcBar(errorMsg, "error"))
  }
}

function* signIn(action) {
  try {
    const response = yield call(axios, {
      method: "post",
      url: `${USER_SIGNIN_API}`,
      data: action.payload,
    });
    yield put(signInSuccess(response.data.token));
    yield put(showSnakcBar("Sigin Successful", "success"))
  } catch (error) {
    yield put(signInFailure());
    const errorMsg = error.response.data.message;
    console.log(errorMsg)
    yield put(showSnakcBar(errorMsg, "error"))
  }
}

function* getUser(action) {
  try {
    const response = yield call(axios, {
      method: "get",
      url: `${USER_API}`,
      headers: {
        authorization: `Bearer ${action.payload}`,
      },
    });
    console.log(response);
    yield put(setUser());
  } catch (err) {
    console.log(err)
  }
}

export default function* userSaga() {
  yield takeEvery(SIGNIN_REQUEST, signIn);
  yield takeEvery(SIGNUP_REQUEST, signUp);
  yield takeEvery(GET_USER_REQUEST, getUser);
}