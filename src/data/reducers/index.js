import { combineReducers } from 'redux';

import assets from './assets';
import connectionStatus from './connectionStatus';

/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
const courseDetails = () => { return courseContext || {}; };

const rootReducer = combineReducers({
  assets,
  connectionStatus,
  courseDetails,
});

export default rootReducer;
