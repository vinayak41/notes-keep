import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SET_USER,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  GET_USER_REQUEST
} from "../typeConstants/userTypeConstants";

const initialState = { isAuthenticated: false, isLoading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SIGNUP_SUCCESS: 
      return {
        ...state,
        isLoading: false
      }
    case SIGNUP_FAILURE: 
      return {
        ...state,
        isLoading: false
      }
    case SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case SIGNIN_SUCCESS:
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false
      };
    case GET_USER_REQUEST: 
      return {
        ...state,
        isLoading: true,
      }
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
