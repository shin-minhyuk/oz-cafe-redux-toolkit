// import {
//   combineReducers,
//   createReducer,
//   createStore,
//   legacy_createStore,
// } from "@reduxjs/toolkit";
// import data from "../assets/data";

// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import data from "../assets/data";

// // action
// export const addToCart = (options, quantity, id) => {
//   return {
//     type: "addToCart",
//     payload: { options, quantity, id },
//   };
// };

// export const removeFromCart = (id) => {
//   return {
//     type: "removeFromCart",
//     payload: { id },
//   };
// };

// // reducer
// const menuReducer = (state = data.menu, action) => {
//   return state;
// };

// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case "addToCart":
//       return [...state, action.payload];
//     case "removeFromCart":
//       return state.filter((el) => action.payload.id !== el.id);
//     default:
//       return state;
//   }
// };

// // store
// const rootReducer = combineReducers({ menuReducer, cartReducer });
// export const store = legacy_createStore(rootReducer);

// ------------------------------------------------------------------------

// action, reducer
// export const menuSlice = createSlice({
//   name: "menu",
//   initialState: data.menu,
//   reducers: {},
// });

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => [...state, action.payload],
//     removeFromCart: (state, action) =>
//       state.filter((el) => el.id !== action.payload.id),
//   },
// });
// console.log(cartSlice);

// // store
// export const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//     menu: menuSlice.reducer,
//   },
// });

// ------------------------------------------------------------------------
