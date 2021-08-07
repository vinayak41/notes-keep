import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SET_USER,
  SIGNUP_SUCCESS
} from "../typeConstants/userTypeConstants";

const initialState = { isLogin: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case SET_USER:
      return {
        ...state,
        isLogin: true,
        user: action.payload
      }
    default:
      return state;
  }
};
