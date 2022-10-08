import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    removeStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStatus, removeStatus } = statusSlice.actions;

export default statusSlice.reducer;
