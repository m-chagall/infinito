import { createSlice } from "@reduxjs/toolkit";

let inCartItems = createSlice({
  name: "inCartItems",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      let index = state.findIndex((x) => {
        return x.id === action.payload;
      });
      state.splice(index, 1);
    },
  },
});
export let { addItem, deleteItem } = inCartItems.actions;
export default inCartItems;
