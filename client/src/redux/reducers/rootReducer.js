import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import userReducer from "./userReducer";
import snackBarReducers from "./snackBarReducers";
import themeReducers from "./themeReducers";

const rootReducer = combineReducers({
  note: noteReducer,
  user: userReducer,
  snackBar: snackBarReducers,
  theme: themeReducers,
});

export default rootReducer;
