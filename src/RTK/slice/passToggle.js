import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visiblePass: false,
};

export const PassToggle = createSlice({
  initialState,
  name: "PassToggle",
  reducers: {
    toggleVisiblePass: (state) => {
      state.visiblePass = !state.visiblePass;
    },
  },
});

export const { toggleVisiblePass } = PassToggle.actions;

export default PassToggle.reducer;