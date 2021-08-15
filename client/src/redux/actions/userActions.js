import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
	GET_USER_REQUEST,
  SET_USER,
} from "../typeConstants/userTypeConstants";

//signup actions
export const signUpRequest = (formData, history) => {
  return {
    type: SIGNUP_REQUEST,
    payload: formData,
    history: history
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signUpFailure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

//sigin actions
export const signInRequest = (formData) => {
  return {
    type: SIGNIN_REQUEST,
    payload: formData,
  };
};

export const signInSuccess = (token) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: token,
  };
};

export const signInFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

//user actios
export const getUser = (token) => {
  return {
		type: GET_USER_REQUEST,
		payload: token
	};
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}