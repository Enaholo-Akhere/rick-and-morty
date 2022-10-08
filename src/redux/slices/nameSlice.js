import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  name: '',
};

// actual slice
export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    removeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName, removeName } = nameSlice.actions;

export default nameSlice.reducer;
