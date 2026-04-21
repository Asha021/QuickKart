import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
    name: 'cart',
    reducer: {
        cart: cartReducer,
    },
})

export default store;