import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import userReducer from "./userReducer";
import snackBarReducers from "./snackBarReducers";

const rootReducer = combineReducers({
  note: noteReducer,
  user: userReducer,
  snackBar: snackBarReducers,
});

export default rootReducer;
