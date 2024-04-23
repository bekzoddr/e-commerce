import { configureStore } from "@reduxjs/toolkit";
import { toggleToWishes } from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    wishlist: toggleToWishes,
  },
});
