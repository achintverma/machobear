import { combineReducers } from "redux";

import members from "./members";
import works from "./works";

export default combineReducers({
	members,
	works
})