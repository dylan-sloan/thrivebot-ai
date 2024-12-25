import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter-slice.ts';
import userMessageReducer from '../slices/userMessage-slice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userMessage: userMessageReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;