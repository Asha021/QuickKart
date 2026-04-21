import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: 'idle',
    totalcount: 0,
    totalamount: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addToCart: (state, action)=>{
            const items = action.payload;
            const existingItem = state.items.find(i => i.id === items.id);

            if(existingItem) existingItem.quantity += 1;
            else state.items.push({...items, quantity: 1});
            
            // update total count and amount
            state.totalcount += 1;
            state.totalamount += items.price;
        },

        removeFromCart: (state, action)=>{
            const itemId = action.payload;
            const existingItem = state.items.find(i => i.id === itemId);

            if(!existingItem) return;       
          
            state.totalcount -= existingItem.quantity;
            state.totalamount -= existingItem.price * existingItem.quantity;
            state.items = state.items.filter(i => i.id !== itemId);
        }
        
    }
})

export const {addToCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;

