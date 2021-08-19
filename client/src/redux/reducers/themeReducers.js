import { CHANGE_THEME } from "../typeConstants/themeTypeConstants";

const initialState = { type: "light" };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      localStorage.setItem("theme", action.payload)
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
};
