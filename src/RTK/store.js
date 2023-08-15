import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import passToggle from "./slice/passToggle";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    PassToggle: passToggle,
  },
});
