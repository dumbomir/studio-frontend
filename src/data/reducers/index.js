import { combineReducers } from 'redux';

import assets from './assets';
import connectionStatus from './connectionStatus';

const courseDetails = () => { return courseContext; };

const rootReducer = combineReducers({
  assets,
  connectionStatus,
  courseDetails,
});

export default rootReducer;
