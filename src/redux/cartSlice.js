import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
export const {removeFromCart} = cartSlice.actions;