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
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = mainSlice.actions;

export default mainSlice.reducer;
