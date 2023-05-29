import { createSlice } from "@reduxjs/toolkit";

const oredrSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addToOrder(state, { payload }) {
      if (state.find((prod) => prod._id === payload._id)) {
        state.forEach((el) => {
          if (el._id === payload._id) {
            el.quantity += 1;
          }
        });
      } else {
        return [...state, { ...payload, quantity: 1 }];
      }
    },
    changeQuantity(state, { payload }) {
      state.forEach((el, idx) => {
        if (el._id === payload._id) {
          el.quantity = payload.quantity;
          if (el.quantity <= 0) {
            state.splice(idx, 1);
          }
        }
      });
    },
    resetOrder(state) {
      return [];
    },
  },
});

export const { addToOrder, changeQuantity, resetOrder } = oredrSlice.actions;

export const orderReducer = oredrSlice.reducer;
