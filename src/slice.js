import { createSlice } from "@reduxjs/toolkit";

export const inputData = createSlice({
  name: "taskList",
  initialState: {
    input: "",
  },
  reducers: {
    submitInput: (state, action) => {
      state.input = action.payload;
      console.log(action.payload);
    },
  },
});

export const { submitInput } = inputData.actions;
export const input = (state) => state.input.input;
export default inputData.reducer;
