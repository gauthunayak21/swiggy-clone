import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            state.items,lenght = 0;
        }
    }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;