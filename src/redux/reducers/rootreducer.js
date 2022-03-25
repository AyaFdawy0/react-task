import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
	users: usersReducer,
	status: statusReducer,
});

export default rootReducer;
