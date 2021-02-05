import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

// =======================================
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rootReducer, composeWithDevTools());

export default store;
