import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers/rootReducer";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function configureStore(preloadedState) {
	return createStore(
		rootReducer(history),
		preloadedState,
		compose(applyMiddleware(thunk, routerMiddleware(history)))
	);
}

export default configureStore;
 