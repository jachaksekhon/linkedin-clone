import { configureStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});
