import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    count: number
}

const initialState: TInitialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;