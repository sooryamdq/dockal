// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from "./Slice"


const rootReducer = combineReducers({
    auth: authReducer,
  // Add more reducers as needed
});

export default rootReducer;
// reducers/index.js


