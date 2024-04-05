// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from "./Slice"
import studentGroupsReducer from "./StudentgropSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    studentGroups: studentGroupsReducer,
  // Add more reducers as needed
});

export default rootReducer;
// reducers/index.js


