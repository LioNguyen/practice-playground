import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state) => ({
      ...state,
      value: state.value + 1,
    }),
    decreaseCounter: (state) => ({
      ...state,
      value: state.value - 1,
    }),
    increaseCounterByAmount: (state, action) => ({
      ...state,
      value: state.value + action.payload.amount,
    }),
    decreaseCounterByAmount: (state, action) => ({
      ...state,
      value: state.value - action.payload.amount,
    }),
  },
});

export const {
  decreaseCounter,
  decreaseCounterByAmount,
  increaseCounter,
  increaseCounterByAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
