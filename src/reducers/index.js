import { combineReducers } from "redux";

export default combineReducers({
  replaceMe: () =>
    "this is just tricking redux into thinking that it has a valid reducer to get rid of an error message",
});
