import configureStore from './helpers/storeConfig';
import { saveState, loadState } from "./helpers/localStorage";

// const persistedState = loadState();
// //const persistedState = currentState ? currentState : ;
const store = configureStore();

// store.subscribe(() => {
//     saveState(store.getState());
// });

export default store;