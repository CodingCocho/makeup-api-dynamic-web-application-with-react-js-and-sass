import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice (
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart(state,action)
            {
                state.push(action.payload);
            },
            removeFromCart(state, action)
            {
                for(let counter = 0; counter < state.length(); counter++)
                {
                    if(state[counter].id === action.payload)
                    {
                        state.splice(counter, 1);
                        counter--;
                    }
                }
            }
        }
    }
)

export const {addToCard, removeFromCart} =  cartSlice.actions;

export default cartSlice.reducer;