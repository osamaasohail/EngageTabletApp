import {configureStore} from '@reduxjs/toolkit';
import {photoSlice} from './photoSlice';

const store = configureStore({
  reducer: {
    photoSlice: photoSlice.reducer,
  },
});

export default store;
