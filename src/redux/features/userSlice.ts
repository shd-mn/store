import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserTypes} from '../../pages/Products/types';

interface InitialState {
  user: UserTypes;
  isSignedIn: boolean;
}

const initialState: InitialState = {
  user: {} as UserTypes,
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserTypes>) => {
      state.user = action.payload;
    },
    setSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const {setUser, setSignedIn} = userSlice.actions;
export default userSlice.reducer;
