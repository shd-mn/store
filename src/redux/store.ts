import {configureStore} from '@reduxjs/toolkit';
import mainSlice from './features/mainSlice';
import userSlice from './features/userSlice';
export const store = configureStore({
  reducer: {
    main: mainSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
