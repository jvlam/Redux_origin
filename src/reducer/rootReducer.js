import { combineReducers } from "redux";

import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter123: counterReducer,
});

export default rootReducer;
