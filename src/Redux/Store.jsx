// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer';


const store = configureStore({
  reducer: rootReducer,
  // Optionally configure middleware, enhancers, and other options
});

export default store;
