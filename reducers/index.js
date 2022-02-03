import { createSlice } from '@reduxjs/toolkit'
import {getProducts} from "../thunks/"

const initialState = {
  cart: [],
  products:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      debugger;
      state.cart.push(action.payload);
    
    },
   
  
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products.push(action.payload)
    }).addCase(getProducts.pending,(state,action)=>{
    })
  },
})

// Action creators are generated for each case reducer function
export const {addToCart} = counterSlice.actions

export default counterSlice.reducer