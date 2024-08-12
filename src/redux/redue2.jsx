import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

// name, state, reduce
const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {},
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      // { options, quantity, id: modalMenu.id } 다시 받아올 데이터들
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

console.log(cartSlice);

// store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
  },
});
