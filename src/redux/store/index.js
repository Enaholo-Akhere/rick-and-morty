import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

//Global store
export const store = configureStore({
  reducer: {
    filter: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
  },
});
