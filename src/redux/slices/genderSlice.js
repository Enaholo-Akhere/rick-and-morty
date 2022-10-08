import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  gender: '',
};

// actual slice
export const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    removeGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setGender, removeGender } = genderSlice.actions;

export default genderSlice.reducer;
