import { configureStore, createSlice } from '@reduxjs/toolkit'
import inCartItems from './store/inCartItems.js';

let user = createSlice({
    name : "user",
    initialState : "Orso Coreano",
    reducers : {
        changeName(state) {
            return state
        }
    }
})

export default configureStore({
  reducer: {
    user : user.reducer,
    inCartItems : inCartItems.reducer,
  }
})
export let { changeName } = user.actions;
