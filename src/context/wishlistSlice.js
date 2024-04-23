import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    toggleToWishes(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, payload];
      } else {
        state.value = state.value.filter((el) => el.id !== payload.id);
      }
    },
  },
});

export const { toggleToWishes } = wishlistSlice.actions;

export default wishlistSlice.reducer;
