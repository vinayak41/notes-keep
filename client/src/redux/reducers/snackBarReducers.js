import {
  CLOSE_SNACKBAR,
  SHOW_SNACKBAR,
} from "../typeConstants/snackBarTypeConstants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
        message: null,
      };
    default:
      return state;
  }
};
