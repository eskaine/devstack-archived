import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./auth.reducer";
import routeReducer from "./route.reducer";


const rootReducer = (history) => combineReducers({
	router: connectRouter(history),
	...authReducer,
	route: routeReducer
});

export default rootReducer;