import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import isAuthenticated from "./auth.reducer";

const rootReducer = (history) => combineReducers({
	router: connectRouter(history),
	isAuthenticated
});

export default rootReducer;