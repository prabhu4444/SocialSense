// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import theme1Reducer from './theme1Slice';

export const store = configureStore({
  reducer: {
    theme1: theme1Reducer,
  },
});