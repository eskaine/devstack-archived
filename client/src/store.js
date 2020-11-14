import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers/rootReducer";

function configureStore(preloadedState) {
	return createStore(
		rootReducer(history),
		preloadedState,
		compose(applyMiddleware(thunk, routerMiddleware(history)))
	);
}

export const history = createBrowserHistory();
export default configureStore;
