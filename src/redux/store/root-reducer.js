import { combineReducers } from '@reduxjs/toolkit';

import { statusReducer, genderReducer, nameReducer } from '../slices';

export const rootReducer = combineReducers({
  gender: genderReducer,
  status: statusReducer,
  name: nameReducer,
});
