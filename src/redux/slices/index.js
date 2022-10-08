import statusReducer, { setStatus, removeStatus } from './statusSlice';
import genderReducer, { setGender, removeGender } from './genderSlice';
import nameReducer, { setName, removeName } from './nameSlice';

// Actions
export {
  setGender,
  removeGender,
  setStatus,
  removeStatus,
  setName,
  removeName,
};

// Reducers
export { statusReducer, genderReducer, nameReducer };
