import configureStore from './config/store.config';

// const persistedState = loadState();
// //const persistedState = currentState ? currentState : ;
const store = configureStore();

// store.subscribe(() => {
//     saveState(store.getState());
// });

export default store;