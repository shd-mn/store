import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface mainState {
  value: number;
}

const initialState: mainState = {
  value: 0,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
