import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
